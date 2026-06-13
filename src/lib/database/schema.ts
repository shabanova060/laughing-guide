import { defineRelations, sql } from 'drizzle-orm';
import {
	boolean,
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core';

export const admins = pgTable('admins', {
	id: uuid().default(sql`uuidv7()`).primaryKey(),
	email: varchar({ length: 255 }).unique().notNull(),
	passwordHash: varchar({ length: 255 }).notNull(),
	emailVerified: boolean().default(false).notNull(),
	twoFactorEnabled: boolean().default(false).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'date' })
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'date' })
		.defaultNow()
		.notNull(),
});

export const adminSessions = pgTable('adminSessions', {
	tokenHash: text().primaryKey(),
	adminId: uuid()
		.references(() => admins.id, { onDelete: 'cascade' })
		.notNull(),
	expiresAt: timestamp({ withTimezone: true, mode: 'date' }).notNull(),
	twoFactorVerified: boolean().default(false).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'date' })
		.defaultNow()
		.notNull(),
});

export const adminVerificationCodes = pgTable('adminVerificationCodes', {
	tokenHash: text().primaryKey(),
	adminId: uuid()
		.references(() => admins.id, { onDelete: 'cascade' })
		.notNull(),
	purpose: text({
		enum: ['email_verification', 'otp_login', 'password_reset'],
	}).notNull(),
	codeHash: text().notNull(),
	attempts: integer().default(0).notNull(),
	expiresAt: timestamp({ withTimezone: true, mode: 'date' }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'date' })
		.defaultNow()
		.notNull(),
});

export const adminPendingSessions = pgTable('adminPendingSessions', {
	tokenHash: text().primaryKey(),
	adminId: uuid()
		.references(() => admins.id, { onDelete: 'cascade' })
		.notNull(),
	purpose: text({
		enum: ['otp_login', 'password_reset', 'email_verification'],
	}).notNull(),
	expiresAt: timestamp({ withTimezone: true, mode: 'date' }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'date' })
		.defaultNow()
		.notNull(),
});

export const relations = defineRelations(
	{ admins, adminSessions, adminVerificationCodes, adminPendingSessions },
	(r) => ({
		adminSessions: {
			admin: r.one.admins({ from: r.adminSessions.adminId, to: r.admins.id }),
		},
		adminVerificationCodes: {
			admin: r.one.admins({
				from: r.adminVerificationCodes.adminId,
				to: r.admins.id,
			}),
		},
		adminPendingSessions: {
			admin: r.one.admins({
				from: r.adminPendingSessions.adminId,
				to: r.admins.id,
			}),
		},
		admins: {
			sessions: r.many.adminSessions(),
			verificationCodes: r.many.adminVerificationCodes(),
			pendingSessions: r.many.adminPendingSessions(),
		},
	}),
);

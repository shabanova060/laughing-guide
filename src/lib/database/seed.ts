import { reset } from 'drizzle-seed';
import { hashPassword } from '~/lib/auth/password';
import { database } from '~/lib/database/connection';
import {
	adminPendingSessions,
	adminSessions,
	admins,
	adminVerificationCodes,
} from '~/lib/database/schema';

const seed = async (): Promise<void> => {
	console.log('Resetting database...');

	await reset(database, [
		adminPendingSessions,
		adminSessions,
		admins,
		adminVerificationCodes,
	]);

	console.log('Seeding admin user...');

	await database
		.insert(admins)
		.values({
			email: 'admin@example.com',
			passwordHash: await hashPassword('changeme123'),
			emailVerified: true,
		})
		.onConflictDoNothing({ target: admins.email });

	console.log(`Done. Admin seeded with email: admin@example.com`);
};

seed()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error('Seed failed:', err);
		process.exit(1);
	});

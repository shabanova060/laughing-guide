import { encodeBase32LowerCaseNoPadding } from '@oslojs/encoding';

export const generateSessionToken = (): string => {
	return encodeBase32LowerCaseNoPadding(
		crypto.getRandomValues(new Uint8Array(20)),
	).toLowerCase();
};

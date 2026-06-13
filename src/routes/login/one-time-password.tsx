import { Button } from '@base-ui/react/button';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import { Separator } from '@base-ui/react/separator';
import { createFileRoute, Link } from '@tanstack/react-router';
import { FingerprintPattern, KeyRound, Mail } from 'lucide-react';

export const Route = createFileRoute('/login/one-time-password')({
	component: RouteComponent,
});

const inputClassName =
	'h-10 w-full rounded-lg border border-neutral-200 bg-transparent px-3 text-sm text-neutral-900 placeholder:text-neutral-400/80 outline-none transition-all ' +
	'data-focused:border-neutral-950 data-focused:ring-4 data-focused:ring-neutral-950/20 ' +
	'data-invalid:border-red-500 ' +
	'data-focused:data-invalid:border-red-500 data-focused:data-invalid:ring-4 data-focused:data-invalid:ring-red-500/20 ' +
	'dark:border-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-500 ' +
	'dark:data-focused:border-neutral-300 dark:data-focused:ring-white/20 ' +
	'dark:data-invalid:border-red-400 ' +
	'dark:data-focused:data-invalid:border-red-400 dark:data-focused:data-invalid:ring-red-500/20';

const otpSlotClassName =
	'h-10 w-10 rounded-lg border border-neutral-200 bg-transparent text-center text-sm font-medium text-neutral-900 outline-none transition-all ' +
	'focus:border-neutral-950 focus:ring-4 focus:ring-neutral-950/20 ' +
	'data-invalid:border-red-500 ' +
	'dark:border-neutral-800 dark:text-neutral-50 ' +
	'dark:focus:border-neutral-300 dark:focus:ring-white/20 ' +
	'dark:data-invalid:border-red-400';

const labelClassName =
	'text-xs font-medium text-neutral-700 dark:text-neutral-300 select-none';

const descriptionClassName =
	'text-xs text-neutral-500 text-center dark:text-neutral-400 select-none';

const errorClassName =
	'text-xs font-medium text-red-600 dark:text-red-400 target:animate-in fade-in-50 duration-150';

const secondaryLinkClassName =
	'grid h-10 w-full grid-flow-col items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-transparent px-4 text-sm font-medium text-neutral-600 transition-colors select-none ' +
	'hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-950 outline-none ' +
	'dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300';

function RouteComponent() {
	return (
		<main className="grid h-screen w-full place-items-center bg-neutral-50 p-4 dark:bg-neutral-950">
			<article className="grid w-full max-w-sm gap-6 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
				<header className="relative isolate -mx-6 -mt-6 grid justify-items-center gap-4 overflow-hidden rounded-t-2xl border-neutral-100/80 border-b bg-neutral-50/50 p-6 text-center dark:border-neutral-800/50 dark:bg-neutral-900/50">
					<div
						className="mask-[linear-gradient(to_bottom,white_60%,transparent)] absolute inset-0 -z-1 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-size-[12px_12px] [-webkit-mask-image:linear-gradient(to_bottom,white_60%,transparent)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]"
						aria-hidden="true"
					/>
					<div className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200/60 bg-white/80 text-neutral-800 shadow-xs backdrop-blur-xs dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-neutral-200">
						<FingerprintPattern className="size-5 select-none" />
					</div>
					<div className="grid gap-1">
						<h1 className="font-semibold text-lg text-neutral-900 tracking-tight dark:text-neutral-50">
							Welcome back
						</h1>
						<p className="text-neutral-500 text-xs dark:text-neutral-400">
							Login with your e-mail using a one-time password
						</p>
					</div>
				</header>

				<Form className="grid gap-4">
					<Field.Root name="email" className="grid gap-1.5">
						<Field.Label className={labelClassName}>E-mail address</Field.Label>
						<Field.Control
							className={inputClassName}
							type="email"
							autoComplete="email"
							placeholder="e.g. admin@icloud.com"
							required
						/>
						<Field.Error className={errorClassName} />
					</Field.Root>

					<Field.Root name="otp" className="grid gap-2">
						<Field.Label className={`text-center ${labelClassName}`}>
							One-time password
						</Field.Label>
						<OTPField.Root
							className="flex justify-center gap-2"
							length={6}
							autoSubmit={true}
						>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 1 of 6"
							/>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 2 of 6"
							/>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 3 of 6"
							/>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 4 of 6"
							/>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 5 of 6"
							/>
							<OTPField.Input
								className={otpSlotClassName}
								aria-label="Character 6 of 6"
							/>
						</OTPField.Root>
						<Field.Description className={descriptionClassName}>
							Enter the 6-character code we sent to your device.
						</Field.Description>
						<Field.Error className={errorClassName} />
					</Field.Root>

					<Button
						type="submit"
						className="mt-2 grid h-10 w-full grid-flow-col items-center justify-center gap-x-2 rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
					>
						<Mail className="size-4" />
						<span>Send one-time password</span>
					</Button>
				</Form>
				<div className="grid grid-cols-[1fr_auto_1fr] items-center">
					<Separator
						orientation="horizontal"
						className="h-px bg-neutral-200 dark:bg-neutral-800"
					/>
					<span className="px-2 text-neutral-950 text-sm dark:text-neutral-50">
						OR
					</span>
					<Separator
						orientation="horizontal"
						className="h-px bg-neutral-200 dark:bg-neutral-800"
					/>
				</div>

				<div className="grid gap-2">
					<Link className={secondaryLinkClassName} to="/login/password">
						<KeyRound className="size-4" />
						<span>Password login</span>
					</Link>

					<Link
						className={secondaryLinkClassName}
						to="/login/one-time-password"
					>
						<FingerprintPattern className="size-4" />
						<span>Passkey login</span>
					</Link>
				</div>
			</article>
		</main>
	);
}

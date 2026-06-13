import { Button } from '@base-ui/react/button';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { createFileRoute } from '@tanstack/react-router';
import { Mail, RotateCcw } from 'lucide-react';

export const Route = createFileRoute('/login/password-reset')({
	component: PasswordResetPage,
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

const labelClassName =
	'text-xs font-medium text-neutral-700 dark:text-neutral-300 select-none';

const errorClassName =
	'text-xs font-medium text-red-600 dark:text-red-400 target:animate-in fade-in-50 duration-150';

const descriptionClassName =
	'text-xs text-neutral-500 dark:text-neutral-400 select-none';

function PasswordResetPage() {
	return (
		<main className="grid h-screen w-full place-items-center bg-neutral-50 p-4 dark:bg-neutral-950">
			<article className="grid w-full max-w-sm gap-6 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
				<header className="relative isolate -mx-6 -mt-6 grid justify-items-center gap-4 overflow-hidden rounded-t-2xl border-neutral-100/80 border-b bg-neutral-50/50 p-6 text-center dark:border-neutral-800/50 dark:bg-neutral-900/50">
					<div
						className="mask-[linear-gradient(to_bottom,white_60%,transparent)] absolute inset-0 -z-1 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-size-[12px_12px] [-webkit-mask-image:linear-gradient(to_bottom,white_60%,transparent)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]"
						aria-hidden="true"
					/>
					<div className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200/60 bg-white/80 text-neutral-800 shadow-xs backdrop-blur-xs dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-neutral-200">
						<RotateCcw className="size-5 select-none" />
					</div>
					<div className="grid gap-1">
						<h1 className="font-semibold text-lg text-neutral-900 tracking-tight dark:text-neutral-50">
							Reset your password
						</h1>
						<p className="text-neutral-500 text-xs dark:text-neutral-400">
							Reset your password using a one-time code
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
						<Field.Description className={descriptionClassName}>
							To reset your password, enter your e-mail address
						</Field.Description>
						<Field.Error className={errorClassName} />
					</Field.Root>

					<Button
						type="submit"
						className="mt-2 grid h-10 w-full grid-flow-col items-center justify-center gap-x-2 rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
					>
						<Mail className="size-4" />
						<span>Send reset code</span>
					</Button>
				</Form>
			</article>
		</main>
	);
}

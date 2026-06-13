import { Button } from '@base-ui/react/button';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
	return (
		<main className="grid h-screen grid-flow-col place-items-center gap-x-8 bg-neutral-50 p-4 dark:bg-neutral-950">
			<Button
				type="submit"
				className="mt-2 grid h-10 w-full place-items-center rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
				nativeButton={false}
				render={<Link to="/login/password">Password login</Link>}
			/>
			<Button
				type="submit"
				className="mt-2 grid h-10 w-full place-items-center rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
				nativeButton={false}
				render={<Link to="/login/password-reset">Password reset</Link>}
			/>
			<Button
				type="submit"
				className="mt-2 grid h-10 w-full place-items-center rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
				nativeButton={false}
				render={
					<Link to="/login/one-time-password">One-time password login</Link>
				}
			/>
			<Button
				type="submit"
				className="mt-2 grid h-10 w-full place-items-center rounded-lg bg-neutral-900 px-4 font-medium text-neutral-50 text-sm transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-950 focus-visible:outline-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:focus-visible:outline-white dark:hover:bg-neutral-200"
				nativeButton={false}
				render={<Link to="/login/verify-email">Verify e-mail page</Link>}
			/>
		</main>
	);
}

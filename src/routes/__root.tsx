/// <reference types="vite/client" />

import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router';

import themeCss from '~/theme/globals.css?url';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ title: 'TanStack Start Starter' },
		],
		links: [{ rel: 'stylesheet', href: themeCss }],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" dir="ltr" data-theme="light">
			<head>
				<HeadContent />
			</head>
			<body className="relative isolate antialiased">
				{children}
				<Scripts />
			</body>
		</html>
	);
}

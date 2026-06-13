import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login/passkey')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/login/passkey"!</div>;
}

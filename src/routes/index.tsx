import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main className="h-screen bg-neutral-50 p-4 dark:bg-neutral-950"></main>
  );
}

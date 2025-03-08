import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/help/password/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/help/password/"!</div>;
}

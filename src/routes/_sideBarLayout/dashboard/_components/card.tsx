import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_sideBarLayout/dashboard/_components/card'
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_sideBarLayout/dashboard/_components/card"!</div>;
}

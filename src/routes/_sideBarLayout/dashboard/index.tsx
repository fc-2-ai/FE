import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_sideBarLayout/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>대시보드입니다.</div>;
}

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_sideBarLayout/video-archive/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>영상 보관함</div>;
}

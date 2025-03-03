import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/_sideBarLayout')({
  component: RouteComponent,
});

const menuItems = [
  { to: '/dashboard', label: '대시보드' },
  { to: '/my-project', label: '내 프로젝트' },
  { to: '/vedio-archive', label: '영상 보관함' },
];

function RouteComponent() {
  const location = useLocation();

  return (
    <Layout>
      <Sidebar>
        <ul>
          {menuItems.map(({ to, label }) => {
            const isActive = location.pathname === to;

            return (
              <li
                key={to}
                style={{ backgroundColor: isActive ? '#F6F6FA' : '#fff' }}>
                <Link to={to}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  height: 100vh;
`;

const Sidebar = styled.nav`
  padding: 20px;
  text-align: center;

  li {
    border-radius: 10px;
    cursor: pointer;

    a {
      display: block;
      padding: 20px 0;
    }

    &:hover {
      background-color: #f6f6fa;
    }
  }
`;

const Content = styled.main`
  background-color: #f7f8fa;
  padding: 20px;
  overflow: auto;
`;

import { Outlet } from 'react-router-dom';
import SideBar from '~/components/Sidebar';
import { LayoutContainer, MainContent } from './styles';

export const Default = function LayoutDefault() {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

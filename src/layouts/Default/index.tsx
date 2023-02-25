import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react';
import { Outlet } from 'react-router-dom';
import imgLogoTw from '~/assets/img/logo-tw.svg';
import {
  LayoutContainer,
  SideBar,
  SidebarLogo,
  SidebarMenu,
  SideBarLink,
  SidebarNewTweetButton,
  MainContent,
} from './styles';

export const Default = function LayoutDefault() {
  return (
    <LayoutContainer>
      <SideBar>
        <SidebarLogo
          src={imgLogoTw}
          alt='logo tw'
        />
        <SidebarMenu>
          <SideBarLink to='/'>
            <House weight='fill' />
            Home
          </SideBarLink>
          <SideBarLink to='/explore'>
            <Hash />
            Explore
          </SideBarLink>
          <SideBarLink to='/notifications'>
            <Bell />
            Notifications
          </SideBarLink>
          <SideBarLink to='/messages'>
            <Envelope />
            Messages
          </SideBarLink>
          <SideBarLink to='/bookmarks'>
            <BookmarkSimple />
            Bookmarks
          </SideBarLink>
          <SideBarLink to='/lists'>
            <FileText />
            Lists
          </SideBarLink>
          <SideBarLink to='/profile'>
            <User />
            Profile
          </SideBarLink>
          <SideBarLink to='/more'>
            <DotsThreeCircle />
            More
          </SideBarLink>
        </SidebarMenu>
        <SidebarNewTweetButton>tweet</SidebarNewTweetButton>
      </SideBar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

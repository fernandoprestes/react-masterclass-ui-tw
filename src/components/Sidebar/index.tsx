import { House, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Hash } from 'phosphor-react';
import imgLogoTw from '~/assets/img/logo-tw.svg';
import { SideBar, SidebarLogo, SidebarMenu, SideBarLink, SidebarNewTweetButton } from './styles';

export default function Sidebar() {
  return (
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
  );
}

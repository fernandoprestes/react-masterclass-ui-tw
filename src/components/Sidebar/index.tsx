import { House, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Hash, Pencil } from 'phosphor-react';
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
          <span>Home</span>
        </SideBarLink>
        <SideBarLink to='/explore'>
          <Hash />
          <span>Explore</span>
        </SideBarLink>
        <SideBarLink to='/notifications'>
          <Bell />
          <span>Notifications</span>
        </SideBarLink>
        <SideBarLink to='/messages'>
          <Envelope />
          <span>Messages</span>
        </SideBarLink>
        <SideBarLink to='/bookmarks'>
          <BookmarkSimple />
          <span>Bookmarks</span>
        </SideBarLink>
        <SideBarLink to='/lists'>
          <FileText />
          <span>Lists</span>
        </SideBarLink>
        <SideBarLink to='/profile'>
          <User />
          <span>Profile</span>
        </SideBarLink>
        <SideBarLink to='/more'>
          <DotsThreeCircle />
          <span>More</span>
        </SideBarLink>
      </SidebarMenu>
      <SidebarNewTweetButton>
        <Pencil />
        <span>tweet</span>
      </SidebarNewTweetButton>
    </SideBar>
  );
}

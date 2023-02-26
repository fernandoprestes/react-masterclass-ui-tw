import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBar = styled('aside')`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SidebarLogo = styled('img')`
  width: 2rem;
  height: 2rem;
`;

export const SidebarMenu = styled('nav')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SideBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: ${({ theme }) => theme.textSizes['text-lg']};
  font-weight: 700;

  &.active {
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const SidebarNewTweetButton = styled('button')`
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: ${({ theme }) => theme.textSizes['text-lg']};
  font-weight: 700;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }
`;

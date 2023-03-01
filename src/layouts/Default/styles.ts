import styled from 'styled-components';

export const LayoutContainer = styled('div')`
  margin: 0 auto;
  max-width: 1024px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 780px) {
    grid-template-columns: 60px 1fr;
  }
`;

export const MainContent = styled('div')`
  border-left: 1px solid #ebeef0;
  border-right: 1px solid #ebeef0;
`;

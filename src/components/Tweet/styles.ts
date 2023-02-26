import styled from 'styled-components';

export const TweetContainer = styled('a')`
  padding: 1.5rem 1.25rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.75rem;
  border-bottom: 1px solid #ebeef0;
  text-decoration: none;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
  }
`;

export const TweetContent = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TweetContentHeader = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-size: ${({ theme }) => theme.textSizes['text-sm']};
    color: #89a2b8;
  }

  p {
    line-height: 1.25;
  }
`;

export const TweetContentFooter = styled('div')`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 0.75rem;
`;

export const TweetContentButton = styled('button')`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 0;
  font-size: ${({ theme }) => theme.textSizes['text-sm']};
  color: #89a2b8;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

import styled from 'styled-components';

export const TimeLineHeader = styled('div')`
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.textSizes['text-lg']};
  font-weight: 700;
  border-bottom: 1px solid #ebeef0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const NewTweetForm = styled('form')`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NewTweetLabel = styled('label')`
  display: flex;
  gap: 0.75rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
  }

  textarea {
    flex: 1;
    border: 0;
    font-size: ${theme => theme.theme.textSizes['text-lg']};
    font-weight: 500;
    margin-top: 0.75rem;
    resize: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #5b7083;
    }
  }
`;

export const NewTweetButton = styled('button')`
  margin-left: auto;
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  font-weight: 700;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled('div')`
  background: #f7f9fa;
  border-top: 1px solid #ebeef0;
  border-bottom: 1px solid #ebeef0;
  height: 0.75rem;
`;

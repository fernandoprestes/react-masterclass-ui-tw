import styled from 'styled-components';

export const AnswerTweetForm = styled('form')`
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #ebeef0;
`;

export const AnswerTweetLabel = styled('label')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
  }

  textarea {
    flex: 1;
    border: 0;
    margin-top: 1.75rem;
    font-size: ${theme => theme.theme.textSizes['text-lg']};
    font-weight: 500;
    resize: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #5b7083;
    }
  }
`;

export const AnswerTweetButton = styled('button')`
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

  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }

  @media (max-width: 780px) {
    padding: 0.75rem;
    svg {
      display: block;
    }
    span {
      display: none;
    }
  }
`;

export const Separator = styled('div')`
  background: #f7f9fa;
  border-top: 1px solid #ebeef0;
  border-bottom: 1px solid #ebeef0;
  height: 0.75rem;
`;

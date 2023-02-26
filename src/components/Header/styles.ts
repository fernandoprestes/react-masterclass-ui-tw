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

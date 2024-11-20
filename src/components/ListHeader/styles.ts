import { css } from 'styled-components';
import styled from 'styled-components/native';

export const ListHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 24px 20px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${({ theme }) => css`
    margin-top: ${({ theme }) => theme.spacings.md};
    background: ${theme.colors.primary.blue_10};
    border: 1px solid ${theme.colors.secondary.gray_10};
  `}
`;

export const PhotoText = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacings.lg};

  margin-left: 4px;
`;

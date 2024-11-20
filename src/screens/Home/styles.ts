import { css } from 'styled-components';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.lg};
    background: ${theme.colors.background};
  `}
`;

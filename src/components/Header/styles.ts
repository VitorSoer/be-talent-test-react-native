import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacings.lg} 0px;
`;

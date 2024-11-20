import styled, { css } from 'styled-components/native';

export const SearchBarContainer = styled.View`
  width: 100%;
  row-gap: ${({ theme }) => theme.spacings.md};
  margin-top: ${({ theme }) => theme.spacings.sm};
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SearchContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;

    height: 50px;
    border-radius: 25px;
    column-gap: ${theme.spacings.sm};
    padding: 0px ${theme.spacings.md};
    background-color: ${theme.colors.secondary.gray_05};
  `}
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  font-size: 16px;
  font-family: 'Helvetica';
  background-color: transparent;
  color: ${({ theme }) => theme.colors.content};
`;

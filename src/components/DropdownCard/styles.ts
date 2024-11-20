import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    padding: ${theme.spacings.sm} ${theme.spacings.xs};
    border: 1px solid ${theme.colors.secondary.gray_10};
  `}
`;

export const Header = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.sm} ${theme.spacings.md};
  `}
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const NameRole = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacings.md};
`;

export const DetailsContainer = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};
  `}
`;

export const Detail = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.sm};
    padding-bottom: ${theme.spacings.sm};

    border-style: dashed;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.secondary.gray_10};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.secondary.gray_10};
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.content};
  `}
`;

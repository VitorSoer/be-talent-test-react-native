import styled from 'styled-components/native';

export const IconContainer = styled.View`
  position: relative;
  width: 22px;
  height: 22px;
  margin-right: ${({theme}) => theme.spacings.md};
`;

export const BadgeContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -5px;
  right: -15px;

  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.blue};
`;

export const BadgeText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  font-family: 'Helvetica';
  color: ${({ theme }) => theme.colors.background};
`;

import styled from 'styled-components/native';

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.secondary.gray_05};
`;

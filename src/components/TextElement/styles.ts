import styled from 'styled-components/native';

export const Text = styled.Text<{ $variant: 'h1' | 'h2' | 'h3' }>`
  color: ${({ theme }) => theme.colors.content};
  ${({ theme, $variant }) => theme.typography[$variant || 'h3']}
`;

import * as S from './styles';

export type TextProps = {
  text?: string;
  variant?: 'h1' | 'h2' | 'h3';
};

export const TextElement: React.FC<TextProps> = ({
  text = '-',
  variant = 'h3',
}) => {
  return <S.Text $variant={variant}>{text}</S.Text>;
};

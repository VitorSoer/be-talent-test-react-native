import { colors, IColors } from './constants/colors';
import { ITypography, typography } from './constants/typography';
import { ISpacings, spacings } from './constants/spacings';

export type ThemeProps = {
  colors: IColors;
  spacings: ISpacings;
  typography: ITypography;
};

const theme: ThemeProps = {
  colors,
  spacings,
  typography,
};

export default theme;
export type ThemeType = typeof theme;

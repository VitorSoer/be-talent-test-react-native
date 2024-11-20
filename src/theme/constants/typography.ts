type TypographyProps = {
  fontSize: number;
  fontWeight: number;
};

export interface ITypography {
  h1: TypographyProps;
  h2: TypographyProps;
  h3: TypographyProps;
}

export const typography: ITypography = {
  h1: {
    fontSize: 20,
    fontWeight: 500,
  },
  h2: {
    fontSize: 16,
    fontWeight: 500,
  },
  h3: {
    fontSize: 16,
    fontWeight: 400,
  },
};

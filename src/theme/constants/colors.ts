type HexColor = `#${string}`;

export interface IColors {
  content: HexColor;
  background: HexColor;
  primary: {
    blue: HexColor;
    blue_10: HexColor;
  };
  secondary: {
    gray_20: HexColor;
    gray_10: HexColor;
    gray_05: HexColor;
    gray_00: HexColor;
  };
}

export const colors: IColors = {
  content: '#1C1C1C',
  background: '#FFFFFF',
  primary: {
    blue: '#0500FF',
    blue_10: '#EDEFFB',
  },
  secondary: {
    gray_20: '#9E9E9E',
    gray_10: '#DFDFDF',
    gray_05: '#F5F5F5',
    gray_00: '#F0F0F0',
  },
};

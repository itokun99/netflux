export enum AppColorEnum {
  black = 'rgb(0,0,0)',
  white = 'rgb(255,255,255)',
  primary = 'rgb(62, 84, 172)',
  secondary = 'rgb(101, 93, 187)',
  success = 'rgb(1, 147, 124)',
  error = 'rgb(198, 71, 86)',
  warning = 'rgb(251, 194, 82)',
  info = AppColorEnum.primary,
  gray = 'rgb(236, 242, 255)',
  dark = 'rgb(32, 38, 46)',
  light = AppColorEnum.white,
  inputBorder = 'rgb(188, 190, 192)'
}

export const getRgbaColor: (key: keyof typeof AppColorEnum, alpha: number) => string = (key, alpha) => {
  return AppColorEnum[key]
    .split(')')[0]
    .replace('rgb', 'rgba')
    .concat(`,${alpha})`);
}
export enum AppColorEnum {
  black = 'rgb(0,0,0)',
  white = 'rgb(255,255,255)',
  primary = 'rgb(209, 77, 114)',
  secondary = 'rgb(255, 171, 171)',
  success = 'rgb(1, 147, 124)',
  error = 'rgb(198, 71, 86)',
  warning = 'rgb(251, 194, 82)',
  info = 'rgb(252, 200, 209)',
  gray = 'rgb(254, 242, 244)',
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
import { DefaultTheme } from 'styled-components'

export type ThemeColorType =
  | 'background'
  | 'button'
  | 'card'
  | 'hover'
  | 'input'
  | 'label'
  | 'purple'
  | 'purpleLight'
  | 'purpleDark'
  | 'subtitle'
  | 'text'
  | 'title'
  | 'white'
  | 'yellow'
  | 'yellowLight'
  | 'yellowDark'
  | 'error'

type GetThemeColorParams = {
  theme: DefaultTheme
  defaultColor: ThemeColorType
  customColor?: ThemeColorType
}

export function getThemeColor({ customColor, defaultColor, theme }: GetThemeColorParams): string {
  const themeColor = {
    background: theme.color.base.background,
    button: theme.color.base.button,
    card: theme.color.base.card,
    hover: theme.color.base.hover,
    input: theme.color.base.input,
    label: theme.color.base.label,
    purple: theme.color.product.purple,
    purpleDark: theme.color.product.purpleDark,
    purpleLight: theme.color.product.purpleLight,
    subtitle: theme.color.base.subtitle,
    text: theme.color.base.text,
    title: theme.color.base.title,
    white: theme.color.base.white,
    yellow: theme.color.product.yellow,
    yellowDark: theme.color.product.yellowDark,
    yellowLight: theme.color.product.yellowLight,
    error: theme.color.product.error,
  }

  return customColor ? themeColor[customColor] : themeColor[defaultColor]
}

import { describe, test } from 'vitest'
import { lightTheme } from '../../../../styles/theme'
import { getThemeColor, ThemeColorType } from './get-theme-color'

describe('getThemeColor', () => {
  test.each<{ color: ThemeColorType | undefined; correctThemeColor: string }>([
    { color: 'background', correctThemeColor: lightTheme.color.base.background },
    { color: 'button', correctThemeColor: lightTheme.color.base.button },
    { color: 'card', correctThemeColor: lightTheme.color.base.card },
    { color: 'hover', correctThemeColor: lightTheme.color.base.hover },
    { color: 'input', correctThemeColor: lightTheme.color.base.input },
    { color: 'label', correctThemeColor: lightTheme.color.base.label },
    { color: 'purple', correctThemeColor: lightTheme.color.product.purple },
    { color: 'purpleDark', correctThemeColor: lightTheme.color.product.purpleDark },
    { color: 'purpleLight', correctThemeColor: lightTheme.color.product.purpleLight },
    { color: 'subtitle', correctThemeColor: lightTheme.color.base.subtitle },
    { color: 'text', correctThemeColor: lightTheme.color.base.text },
    { color: 'title', correctThemeColor: lightTheme.color.base.title },
    { color: 'white', correctThemeColor: lightTheme.color.base.white },
    { color: 'yellow', correctThemeColor: lightTheme.color.product.yellow },
    { color: 'yellowDark', correctThemeColor: lightTheme.color.product.yellowDark },
    { color: 'yellowLight', correctThemeColor: lightTheme.color.product.yellowLight },
    { color: 'error', correctThemeColor: lightTheme.color.product.error },
    { color: undefined, correctThemeColor: lightTheme.color.base.text },
  ])(
    'should return the correct color of the light theme if the color is $color',
    ({ color, correctThemeColor }) => {
      expect(
        getThemeColor({
          customColor: color,
          defaultColor: 'text',
          theme: lightTheme,
        }),
      ).toEqual(correctThemeColor)
    },
  )
})

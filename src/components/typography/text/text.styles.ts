import styled, { css } from 'styled-components'
import { getThemeColor, ThemeColorType } from '../../../utils/styles/theme/color'

interface DefaultTextProps {
  customColor?: ThemeColorType
}

const DefaultText = styled.p<DefaultTextProps>`
  line-height: 130%;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'text', theme })};
    `
  }}
`

const DefaultRegularText = styled(DefaultText)`
  font-weight: 400;
`

const DefaultBoldText = styled(DefaultRegularText)`
  font-weight: 700;
`

export const RegularTextL = styled(DefaultRegularText)`
  font-size: 1.25rem;
`

export const RegularTextM = styled(DefaultRegularText)`
  font-size: 1rem;
`

export const RegularTextS = styled(DefaultRegularText)`
  font-size: 0.875rem;
`

export const RegularItalicTextS = styled(DefaultText)`
  font-style: italic;
  font-size: 0.75rem;
`

export const BoldTextL = styled(DefaultBoldText)`
  font-size: 1.25rem;
`

export const BoldTextM = styled(DefaultBoldText)`
  font-size: 1.25rem;
`

export const BoldTextS = styled(DefaultBoldText)`
  font-size: 0.75rem;
`

export const BoldTextXS = styled(DefaultBoldText)`
  font-size: 0.625rem;
`

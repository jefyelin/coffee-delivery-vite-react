import styled from 'styled-components'
import { lightTheme } from '../../../../../../styles/theme'
import { getThemeColor, ThemeColorType } from '../../../../../../utils/styles/theme/color'

interface IconContainerProps {
  backgroundColor?: ThemeColorType
  customColor?: ThemeColorType
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    getThemeColor({ customColor: backgroundColor, defaultColor: 'text', theme: lightTheme })};
  color: ${({ customColor }) =>
    getThemeColor({ customColor: customColor, defaultColor: 'white', theme: lightTheme })};
`

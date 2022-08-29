import styled from 'styled-components'
import { lightTheme } from '../../styles/theme'
import { getThemeColor, ThemeColorType } from '../../utils/styles/theme/color'

interface IconContainerProps {
  backgroundColor?: ThemeColorType
  customColor?: ThemeColorType
}

export const Main = styled.main`
  margin-top: 3.125rem;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Container = styled.div`
  display: flex;
  gap: 3.125rem;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const IllustrationImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`

export const InfoContent = styled.div`
  width: 100%;
`

export const InfoContainerBorder = styled.div`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.product.yellow},
    ${({ theme }) => theme.color.product.yellowDark},
    ${({ theme }) => theme.color.product.purpleDark},
    ${({ theme }) => theme.color.product.purple}
  );
  padding: 0.0625rem;
  border-radius: 0.375rem 2.25rem;
  width: 100%;
`

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.base.background};
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InfoWithIconContainer = styled.div`
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

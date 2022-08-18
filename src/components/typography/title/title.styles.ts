import styled, { css } from 'styled-components'
import { getThemeColor, ThemeColorType } from '../../../utils/styles/theme/color'

interface HeadingProps {
  customColor?: ThemeColorType
}

export const HeadingXL = styled.h1<HeadingProps>`
  font-weight: '800';
  font-size: 3rem;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'title', theme })};
    `
  }}
`

export const HeadingL = styled.h2<HeadingProps>`
  font-weight: '800';
  font-size: 2rem;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'title', theme })};
    `
  }}
`

export const HeadingM = styled.h3<HeadingProps>`
  font-weight: '800';
  font-size: 1.5rem;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'title', theme })};
    `
  }}
`

export const HeadingS = styled.h4<HeadingProps>`
  font-weight: '700';
  font-size: 1.25rem;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'title', theme })};
    `
  }}
`

export const HeadingXS = styled.h5<HeadingProps>`
  font-weight: '700';
  font-size: 1.125rem;

  ${({ customColor, theme }) => {
    return css`
      color: ${getThemeColor({ customColor, defaultColor: 'title', theme })};
    `
  }}
`

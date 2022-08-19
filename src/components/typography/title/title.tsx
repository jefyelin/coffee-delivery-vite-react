import { ReactNode } from 'react'
import { ThemeColorType } from '../../../utils/styles/theme/color'
import { HeadingL, HeadingM, HeadingS, HeadingXL, HeadingXLMobile, HeadingXS } from './title.styles'

export type TitleVariant = 'h1' | 'h1-mobile' | 'h2' | 'h3' | 'h4' | 'h5'

export interface TitleProps {
  children: ReactNode
  color?: ThemeColorType
  variant: TitleVariant
}

export function Title({ children, color, variant }: TitleProps) {
  return (
    <>
      {variant === 'h1' && <HeadingXL customColor={color}>{children}</HeadingXL>}
      {variant === 'h1-mobile' && <HeadingXLMobile customColor={color}>{children}</HeadingXLMobile>}
      {variant === 'h2' && <HeadingL customColor={color}>{children}</HeadingL>}
      {variant === 'h3' && <HeadingM customColor={color}>{children}</HeadingM>}
      {variant === 'h4' && <HeadingS customColor={color}>{children}</HeadingS>}
      {variant === 'h5' && <HeadingXS customColor={color}>{children}</HeadingXS>}
    </>
  )
}

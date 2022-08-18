import { ReactNode } from 'react'
import { ThemeColorType } from '../../../utils/styles/theme/color'
import {
  BoldTextL,
  BoldTextM,
  BoldTextS,
  RegularTextL,
  RegularTextM,
  RegularTextS,
} from './text.styles'

export type TextVariant = 'regularL' | 'regularM' | 'regularS' | 'boldL' | 'boldM' | 'boldS'

export interface TextProps {
  children: ReactNode
  variant: TextVariant
  color?: ThemeColorType
}

export function Text({ children, color, variant }: TextProps) {
  return (
    <>
      {variant === 'regularL' && <RegularTextL customColor={color}>{children}</RegularTextL>}
      {variant === 'regularM' && <RegularTextM customColor={color}>{children}</RegularTextM>}
      {variant === 'regularS' && <RegularTextS customColor={color}>{children}</RegularTextS>}
      {variant === 'boldL' && <BoldTextL customColor={color}>{children}</BoldTextL>}
      {variant === 'boldM' && <BoldTextM customColor={color}>{children}</BoldTextM>}
      {variant === 'boldS' && <BoldTextS customColor={color}>{children}</BoldTextS>}
    </>
  )
}

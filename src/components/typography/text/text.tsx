import { HTMLAttributes, ReactNode } from 'react'
import { ThemeColorType } from '../../../utils/styles/theme/color'
import {
  BoldTextL,
  BoldTextM,
  BoldTextS,
  BoldTextXS,
  RegularItalicTextS,
  RegularTextL,
  RegularTextM,
  RegularTextS,
  RegularTextXS,
} from './text.styles'

export type TextVariant =
  | 'regularL'
  | 'regularM'
  | 'regularS'
  | 'regularItalicS'
  | 'regularXS'
  | 'boldL'
  | 'boldM'
  | 'boldS'
  | 'boldXS'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  variant: TextVariant
  color?: ThemeColorType
}

export function Text({ children, color, variant, ...props }: TextProps) {
  return (
    <>
      {variant === 'regularL' && (
        <RegularTextL customColor={color} {...props}>
          {children}
        </RegularTextL>
      )}
      {variant === 'regularM' && (
        <RegularTextM customColor={color} {...props}>
          {children}
        </RegularTextM>
      )}
      {variant === 'regularS' && (
        <RegularTextS customColor={color} {...props}>
          {children}
        </RegularTextS>
      )}
      {variant === 'regularItalicS' && (
        <RegularItalicTextS customColor={color} {...props}>
          {children}
        </RegularItalicTextS>
      )}
      {variant === 'regularXS' && (
        <RegularTextXS customColor={color} {...props}>
          {children}
        </RegularTextXS>
      )}
      {variant === 'boldL' && (
        <BoldTextL customColor={color} {...props}>
          {children}
        </BoldTextL>
      )}
      {variant === 'boldM' && (
        <BoldTextM customColor={color} {...props}>
          {children}
        </BoldTextM>
      )}
      {variant === 'boldS' && (
        <BoldTextS customColor={color} {...props}>
          {children}
        </BoldTextS>
      )}
      {variant === 'boldXS' && (
        <BoldTextXS customColor={color} {...props}>
          {children}
        </BoldTextXS>
      )}
    </>
  )
}

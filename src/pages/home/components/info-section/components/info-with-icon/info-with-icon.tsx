import { ReactNode } from 'react'
import { Text } from '../../../../../../components/typography/text'
import { ThemeColorType } from '../../../../../../utils/styles/theme/color'
import { Container, IconContainer } from './info-with-icon.styles'

type IconConfig = {
  backgroundColor?: ThemeColorType
  color?: ThemeColorType
}

interface InfoWithIconProps {
  children: ReactNode
  icon: ReactNode
  iconConfig?: IconConfig
}

export function InfoWithIcon({ children, icon, iconConfig }: InfoWithIconProps) {
  return (
    <Container>
      <IconContainer backgroundColor={iconConfig?.backgroundColor} customColor={iconConfig?.color}>
        {icon}
      </IconContainer>
      <Text variant='regularM' color='text'>
        {children}
      </Text>
    </Container>
  )
}

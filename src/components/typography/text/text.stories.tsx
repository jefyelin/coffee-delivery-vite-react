import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppStories } from '../../../utils/stories'
import { Text, TextProps } from './text'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Text>

export const Playground: ComponentStory<typeof Text> = ({
  children,
  color,
  variant,
}: TextProps) => (
  <AppStories>
    <Text variant={variant ? variant : 'regularM'} color={color}>
      {children ? children : 'Text exemple'}
    </Text>
  </AppStories>
)

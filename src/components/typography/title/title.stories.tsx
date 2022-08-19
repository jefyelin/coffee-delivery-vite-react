import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../utils/stories'
import { Title, TitleProps } from './title'

export default {
  title: 'Components/Typography/Title',
  component: Title,
  argTypes: {
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Title>

export const Playground: ComponentStory<typeof Title> = ({
  children,
  color,
  variant,
}: TitleProps) => (
  <AppMockStories>
    <Title variant={variant ? variant : 'h1'} color={color}>
      {children ? children : 'Title exemple'}
    </Title>
  </AppMockStories>
)

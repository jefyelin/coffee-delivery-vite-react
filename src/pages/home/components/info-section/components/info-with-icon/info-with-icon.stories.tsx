import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Package } from 'phosphor-react'
import { AppMockStories } from '../../../../../../utils/stories'
import { InfoWithIcon } from './info-with-icon'

export default {
  title: 'Pages/Home/Components/InfoSection/Components/InfoWithIcon',
  component: InfoWithIcon,
} as ComponentMeta<typeof InfoWithIcon>

export const Playground: ComponentStory<typeof InfoWithIcon> = () => {
  return (
    <AppMockStories>
      <InfoWithIcon icon={<Package size={22} weight='fill' />}>Info exemple</InfoWithIcon>
    </AppMockStories>
  )
}

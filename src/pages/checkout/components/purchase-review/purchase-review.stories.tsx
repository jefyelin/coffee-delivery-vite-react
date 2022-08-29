import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { PurchaseReview } from './purchase-review'

export default {
  title: 'Pages/Checkout/Components/PurchaseReview',
} as ComponentMeta<typeof PurchaseReview>

export const Playground: ComponentStory<typeof PurchaseReview> = () => {
  return (
    <AppMockStories>
      <PurchaseReview />
    </AppMockStories>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { Title } from '../../components/typography/title'
import { PaymentType } from '../../domain/models/payment'
import { useCheckout } from '../../hooks/checkout'
import { AddressAndPaymentContainer, Form, Section } from './checkout.styles'
import { Address } from './components/address'
import { Payment } from './components/payment'
import { PurchaseReview } from './components/purchase-review'

const CheckoutFormSchema = zod.object({
  zipCode: zod.string().regex(new RegExp(/(\d{5})-(\d{3})/), {
    message: 'CEP obrigatório e deve conter 8 caracteres numéricos',
  }),
  street: zod.string().min(1, { message: 'Rua obrigatória' }),
  number: zod.string().min(1, { message: 'Número obrigatório' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Bairro obrigatório' }),
  city: zod.string().min(1, { message: 'Cidade obrigatória' }),
  state: zod
    .string()
    .regex(new RegExp(/[a-zA-Z]{2}/), { message: 'UF obrigatória e deve conter 2 letras' }),
  paymentType: zod.enum([PaymentType.CREDIT, PaymentType.DEBIT, PaymentType.MONEY]),
})

export type CheckoutFormData = zod.infer<typeof CheckoutFormSchema>

export function Checkout() {
  const { setDeliveryUserInfo } = useCheckout()
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
      paymentType: undefined,
    },
    mode: 'onTouched',
  })

  const { handleSubmit, control, formState } = checkoutForm

  const handleSetDeliveryUserInfo = (data: CheckoutFormData) => {
    const { city, state, paymentType, neighborhood, number, street, complement } = data

    setDeliveryUserInfo({
      city,
      complement,
      neighborhood,
      number,
      paymentType,
      state,
      street,
    })

    navigate('/purchase-confirmation')
  }

  return (
    <main>
      <Form onSubmit={handleSubmit(handleSetDeliveryUserInfo)}>
        <Section>
          <Title variant='h5' color='subtitle'>
            Complete seu pedido
          </Title>
          <AddressAndPaymentContainer>
            <FormProvider {...checkoutForm}>
              <Address control={control} />
              <Payment control={control} error={!!formState.errors.paymentType} />
            </FormProvider>
          </AddressAndPaymentContainer>
        </Section>
        <Section>
          <Title variant='h5' color='subtitle'>
            Cafés selecionados
          </Title>
          <PurchaseReview />
        </Section>
      </Form>
    </main>
  )
}

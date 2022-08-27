import { CurrencyDollar } from 'phosphor-react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Text } from '../../../../components/typography/text'
import { PaymentType } from '../../../../domain/models/payment'
import { InputRadio } from './components/input-radio'
import {
  Container,
  DescriptionContainer,
  Form,
  InfoContainer,
  InputRadioContainer,
} from './payment.styles'

export type PaymentFormData = {
  paymentType: PaymentType
}

interface PaymentProps {
  handleSubmit: (data: PaymentFormData) => void
}

export function Payment({ handleSubmit: externalHandleSubmit }: PaymentProps) {
  const paymentForm = useForm<PaymentFormData>({
    defaultValues: {
      paymentType: undefined,
    },
  })

  const { control, handleSubmit, formState } = paymentForm

  return (
    <Container>
      <DescriptionContainer>
        <CurrencyDollar size={22} />
        <InfoContainer>
          <Text variant='regularM' color='subtitle'>
            Pagamento
          </Text>
          <Text variant='regularS' color='text'>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Text>
        </InfoContainer>
      </DescriptionContainer>
      <FormProvider {...paymentForm}>
        <Form onSubmit={handleSubmit(externalHandleSubmit)}>
          <InputRadioContainer>
            <Controller
              control={control}
              name='paymentType'
              rules={{ required: true }}
              render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
                <InputRadio
                  id='payment-1'
                  label='cartão de crédito'
                  paymentType='credit'
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value='credit'
                  error={!!error}
                />
              )}
            />
            <Controller
              control={control}
              name='paymentType'
              rules={{ required: true }}
              render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
                <InputRadio
                  id='payment-2'
                  label='cartão de débito'
                  paymentType='debit'
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value='debit'
                  error={!!error}
                />
              )}
            />
            <Controller
              control={control}
              name='paymentType'
              rules={{ required: true }}
              render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
                <InputRadio
                  id='payment-3'
                  label='dinheiro'
                  paymentType='money'
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value='money'
                  error={!!error}
                />
              )}
            />
          </InputRadioContainer>
          {!!formState.errors.paymentType && (
            <Text variant='regularS' color='error'>
              Você precisa selecionar a forma de pagamento
            </Text>
          )}
        </Form>
      </FormProvider>
    </Container>
  )
}

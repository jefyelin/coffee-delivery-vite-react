import { CurrencyDollar } from 'phosphor-react'
import { Control, Controller } from 'react-hook-form'
import { Text } from '../../../../components/typography/text'
import { PaymentType } from '../../../../domain/models/payment'
import { CheckoutFormData } from '../../checkout'
import { InputRadio } from './components/input-radio'
import {
  Container,
  DescriptionContainer,
  FieldsContainer,
  InfoContainer,
  InputRadioContainer,
} from './payment.styles'
interface PaymentProps {
  control: Control<CheckoutFormData>
  error?: boolean
}

export function Payment({ control, error }: PaymentProps) {
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
      <FieldsContainer>
        <InputRadioContainer>
          <Controller
            control={control}
            name='paymentType'
            rules={{ required: true }}
            render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
              <InputRadio
                id='payment-1'
                label='cartão de crédito'
                paymentType={PaymentType.CREDIT}
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
                paymentType={PaymentType.DEBIT}
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
                paymentType={PaymentType.MONEY}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value='money'
                error={!!error}
              />
            )}
          />
        </InputRadioContainer>
        {error && (
          <Text variant='regularS' color='error'>
            Você precisa selecionar a forma de pagamento
          </Text>
        )}
      </FieldsContainer>
    </Container>
  )
}

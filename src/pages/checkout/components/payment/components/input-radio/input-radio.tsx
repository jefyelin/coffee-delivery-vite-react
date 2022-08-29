import { Bank, CreditCard, Money } from 'phosphor-react'
import { InputHTMLAttributes, useRef } from 'react'
import { Text } from '../../../../../../components/typography/text'
import { PaymentType } from '../../../../../../domain/models/payment'
import { Input, Label } from './input-radio.styles'

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  paymentType: PaymentType
  error?: boolean
}

export function InputRadio({ label, paymentType, id, error, ...props }: InputRadioProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const onLabelClick = () => {
    inputRef.current?.click()
  }

  return (
    <div>
      <Input id={id} type='radio' ref={inputRef} {...props} tabIndex={-1} />
      <Label
        htmlFor={id}
        tabIndex={0}
        onKeyUp={(e) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            onLabelClick()
          }
        }}
        error={error}
      >
        {paymentType === 'money' && <Money size={16} />}
        {paymentType === 'credit' && <CreditCard size={16} />}
        {paymentType === 'debit' && <Bank size={16} />}
        <Text variant='regularXS' color='text'>
          {label.toUpperCase()}
        </Text>
      </Label>
    </div>
  )
}

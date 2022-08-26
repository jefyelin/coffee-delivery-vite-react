import { InputHTMLAttributes } from 'react'
import { Text } from '../../../../../../components/typography/text'
import { Container, Field, FieldContainer, OptionalInfoContainer } from './input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  error?: {
    message?: string
  }
}

export function Input({ isOptional, error, ...props }: InputProps) {
  const hasError = !!error?.message

  return (
    <Container>
      <FieldContainer>
        <Field type='text' isOptional={isOptional} error={hasError} {...props} />
        {hasError && (
          <Text variant='regularS' color='error'>
            {error.message}
          </Text>
        )}
      </FieldContainer>
      {isOptional && (
        <OptionalInfoContainer>
          <Text variant='regularItalicS' color='label'>
            Opcional
          </Text>
        </OptionalInfoContainer>
      )}
    </Container>
  )
}

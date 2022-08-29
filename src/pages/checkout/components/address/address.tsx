import { MapPinLine } from 'phosphor-react'
import { Control, Controller } from 'react-hook-form'
import { Text } from '../../../../components/typography/text'
import { CheckoutFormData } from '../../checkout'
import {
  CityAndStateContainer,
  Container,
  DescriptionContainer,
  FieldsContainer,
  InfoContainer,
  NeighborhoodAndCityAndStateContainer,
  NumberAndComplementContainer,
  ZipCodeAndStreetContainer,
} from './address.styles'
import { Input } from './components/input'

interface AddressProps {
  control: Control<CheckoutFormData>
}

export function Address({ control }: AddressProps) {
  return (
    <Container>
      <DescriptionContainer>
        <MapPinLine size={22} />
        <InfoContainer>
          <Text variant='regularM' color='subtitle'>
            Endereço de Entrega
          </Text>
          <Text variant='regularS' color='text'>
            Informe o endereço onde deseja receber seu pedido
          </Text>
        </InfoContainer>
      </DescriptionContainer>
      <FieldsContainer>
        <ZipCodeAndStreetContainer>
          <Controller
            control={control}
            name='zipCode'
            render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={(event) => {
                  const inputValue = event.target.value

                  if (inputValue.length > 9) {
                    return
                  }

                  const formatedInputValue = inputValue
                    .replace(/\D/g, '')
                    .replace(/^(\d{5})(\d)/, '$1-$2')

                  onChange(formatedInputValue)
                }}
                value={value}
                placeholder='CEP'
                error={{ message: error?.message }}
              />
            )}
          />
          <Controller
            control={control}
            name='street'
            render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder='Rua'
                error={{ message: error?.message }}
              />
            )}
          />
        </ZipCodeAndStreetContainer>
        <NumberAndComplementContainer>
          <Controller
            control={control}
            name='number'
            render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder='Número'
                error={{ message: error?.message }}
              />
            )}
          />
          <Controller
            control={control}
            name='complement'
            render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder='Complemento'
                isOptional
                error={{ message: error?.message }}
              />
            )}
          />
        </NumberAndComplementContainer>
        <NeighborhoodAndCityAndStateContainer>
          <Controller
            control={control}
            name='neighborhood'
            render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder='Bairro'
                error={{ message: error?.message }}
              />
            )}
          />
          <CityAndStateContainer>
            <Controller
              control={control}
              name='city'
              render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
                <Input
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  placeholder='Cidade'
                  error={{ message: error?.message }}
                />
              )}
            />
            <Controller
              control={control}
              name='state'
              render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
                <Input
                  name={name}
                  onBlur={onBlur}
                  onChange={(event) => {
                    const inputValue = event.target.value

                    if (inputValue.length > 2) {
                      return
                    }

                    const formatedInputValue = inputValue.replace(/[^a-zA-Z]/g, '').toUpperCase()

                    onChange(formatedInputValue)
                  }}
                  value={value}
                  placeholder='UF'
                  error={{ message: error?.message }}
                />
              )}
            />
          </CityAndStateContainer>
        </NeighborhoodAndCityAndStateContainer>
      </FieldsContainer>
    </Container>
  )
}

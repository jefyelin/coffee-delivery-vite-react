import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine } from 'phosphor-react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Text } from '../../../../components/typography/text'
import {
  CityAndStateContainer,
  ContainerSection,
  DescriptionContainer,
  Form,
  InfoContainer,
  NeighborhoodAndCityAndStateContainer,
  NumberAndComplementContainer,
  ZipCodeAndStreetContainer,
} from './address.styles'
import { Input } from './components/input'

const AddressFormSchema = zod.object({
  zipCode: zod.string().regex(new RegExp(/\d{8}/), {
    message: 'CEP obrigatório e deve conter 8 caracteres numéricos',
  }),
  street: zod.string().min(1, { message: 'Rua obrigatória' }),
  number: zod.string().min(1, { message: 'Número obrigatório' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Bairro obrigatório' }),
  city: zod.string().min(1, { message: 'Cidade obrigatória' }),
  state: zod.string().length(2, { message: 'UF obrigatório e deve conter 2 caracteres' }),
})

type AddressFormData = zod.infer<typeof AddressFormSchema>

export function Address() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, control } = addressForm

  return (
    <ContainerSection>
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
      <FormProvider {...addressForm}>
        <Form onSubmit={handleSubmit((data) => console.log(data))}>
          <ZipCodeAndStreetContainer>
            <Controller
              control={control}
              name='zipCode'
              render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => (
                <Input
                  name={name}
                  onBlur={onBlur}
                  onChange={(event) => {
                    event.target.value.length <= 8 ? onChange(event) : null
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
                      event.target.value.length <= 2
                        ? onChange(event.target.value.toUpperCase())
                        : null
                    }}
                    value={value}
                    placeholder='UF'
                    error={{ message: error?.message }}
                  />
                )}
              />
            </CityAndStateContainer>
          </NeighborhoodAndCityAndStateContainer>
          <input type='submit' />
        </Form>
      </FormProvider>
    </ContainerSection>
  )
}

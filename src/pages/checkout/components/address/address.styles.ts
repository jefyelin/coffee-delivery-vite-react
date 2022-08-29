import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.25rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.color.base.card};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 1.875rem;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.product.yellowDark};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
`

const GridFieldsContainer = styled.div`
  display: grid;
  gap: 1rem;
`

export const ZipCodeAndStreetContainer = styled(GridFieldsContainer)`
  display: grid;
  grid-template-rows: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-rows: none;
    grid-template-columns: 1fr 2.5fr;
  }
`

export const NumberAndComplementContainer = styled(GridFieldsContainer)`
  grid-template-columns: 1fr 2.5fr;
`

export const NeighborhoodAndCityAndStateContainer = styled(GridFieldsContainer)`
  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr 2.5fr;
  }
`

export const CityAndStateContainer = styled(GridFieldsContainer)`
  grid-template-columns: 2.5fr 1fr;
`

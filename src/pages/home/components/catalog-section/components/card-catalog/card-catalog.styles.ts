import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.25rem;
  min-width: 16rem;
  min-height: 19.375rem;
  width: 16rem;
  padding: 0 1rem 1rem;
  border-radius: 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.base.card};
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -1.25rem;
`

export const Tag = styled.div`
  padding: 0.375rem 0.625rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.color.product.yellowLight};
`

export const TagsContainer = styled.div`
  margin-top: 1.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
`

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
  gap: 8px;
  text-align: center;
`

export const BuyContainer = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Cart = styled.button`
  min-height: 2.375rem;
  min-width: 2.375rem;
  width: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.color.product.purpleDark};
  color: ${({ theme }) => theme.color.base.white};
  transition: ease 100ms;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.product.purple};
  }
`

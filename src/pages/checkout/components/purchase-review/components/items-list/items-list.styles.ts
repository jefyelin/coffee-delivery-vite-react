import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.base.button};

  &:first-child {
    padding-top: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    gap: 0;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`

export const ActionsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ActionsButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.25rem;
  padding: 0 0.5rem;
  height: 2.375rem;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.base.button};
  color: ${({ theme }) => theme.color.product.purple};

  &:hover {
    background-color: ${({ theme }) => theme.color.base.hover};
  }
`

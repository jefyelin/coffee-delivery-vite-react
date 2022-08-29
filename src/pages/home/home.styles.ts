import styled from 'styled-components'
import backgroundUrl from '../../assets/images/illustration/background-intro.png'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoSectionContainer = styled.div`
  position: relative;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;

  section {
    max-width: ${({ theme }) => theme.screen.max};
  }
`

export const Background = styled.div`
  background-image: url(${backgroundUrl});
  background-position: center;
  filter: blur(3.125rem);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`

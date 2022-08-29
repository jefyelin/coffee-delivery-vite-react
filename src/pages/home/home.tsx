import { CatalogSection } from './components/catalog-section'
import { InfoSection } from './components/info-section'
import { Background, InfoSectionContainer, Main } from './home.styles'

export function Home() {
  return (
    <Main>
      <InfoSectionContainer>
        <InfoSection />
        <Background />
      </InfoSectionContainer>
      <CatalogSection />
    </Main>
  )
}

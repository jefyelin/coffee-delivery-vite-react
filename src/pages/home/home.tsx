import { CatalogSection } from './components/catalog-section'
import { InfoSection } from './components/info-section'
import { Background, CatalogSectionContainer, InfoSectionContainer, Main } from './home.styles'

export function Home() {
  return (
    <Main>
      <InfoSectionContainer>
        <InfoSection />
        <Background />
      </InfoSectionContainer>
      <CatalogSectionContainer>
        <CatalogSection />
      </CatalogSectionContainer>
    </Main>
  )
}

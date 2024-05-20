import { Container, Content, Create } from './styles'
import { FiPlus, FiStar } from 'react-icons/fi'
import { Section } from "../../components/Section"
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Create>
          <h1>Novo filme</h1>

          <Link to="/create">
            <Button title="Adicionar filme" />
          </Link>
        </Create>

        <Section
          title="Nome do filme"
          icons={[<FiStar />, <FiStar />, <FiStar />, <FiStar />, <FiStar />]}
          tags={['Comédia', 'Terror', 'Suspense']}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis
            velit vel consequatur maiores fugit tenetur? At quidem laudantium, iusto
            architecto quia ex voluptas cupiditate repellendus eius labore voluptate
            reprehenderit. voluptas cupiditate repellendus eius labore voluptate,
            voluptas cupiditate repellendus eius labore voluptate. voluptas cupiditate
            voluptas cupiditate repellendus eius labore voluptate, voluptas cupiditate
          </p>
        </Section>

        <Section
          title="Nome do filme"
          icons={[<FiStar />, <FiStar />, <FiStar />, <FiStar />, <FiStar />]}
          tags={['Comédia', 'Terror', 'Suspense']}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis
            velit vel consequatur maiores fugit tenetur? At quidem laudantium, iusto
            architecto quia ex voluptas cupiditate repellendus eius labore voluptate
            reprehenderit. voluptas cupiditate repellendus eius labore voluptate,
            voluptas cupiditate repellendus eius labore voluptate. voluptas cupiditate
            voluptas cupiditate repellendus eius labore voluptate, voluptas cupiditate
          </p>
        </Section>

        <Section
          title="Nome do filme"
          icons={[<FiStar />, <FiStar />, <FiStar />, <FiStar />, <FiStar />]}
          tags={['Comédia', 'Terror', 'Suspense']}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis
            velit vel consequatur maiores fugit tenetur? At quidem laudantium, iusto
            architecto quia ex voluptas cupiditate repellendus eius labore voluptate
            reprehenderit. voluptas cupiditate repellendus eius labore voluptate,
            voluptas cupiditate repellendus eius labore voluptate. voluptas cupiditate
            voluptas cupiditate repellendus eius labore voluptate, voluptas cupiditate
          </p>
        </Section>
      </Content>
    </Container>
  )
}
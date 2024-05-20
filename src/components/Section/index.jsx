import { Container } from './styles'

export function Section({ title, icons = [], children, tags = [] }) {
  return (
    <Container>
      <h2>{title}</h2>
      {icons}
      {children}
      {tags.map((tag, index) => (
        <h4 key={index}>{tag}</h4>
      ))}
    </Container>
  );
}
import { Summary } from '../Summary'
import { TranscationsTable } from '../TranscationsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranscationsTable />
    </Container>
  )
}

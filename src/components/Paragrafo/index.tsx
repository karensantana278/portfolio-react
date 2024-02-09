import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <span>
    <ParagrafoEstilo tipo={tipo}>{children}</ParagrafoEstilo>
  </span>
)

export default Paragrafo

import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <span>
    <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
  </span>
)

export default Titulo

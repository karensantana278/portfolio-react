import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

export function Projeto() {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com React</Paragrafo>

      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Myllena Lucena</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        karensantana278
      </Paragrafo>

      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedora Front-end
      </Descricao>

      <BotaoTema onClick={props.changeTheme}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

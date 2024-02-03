import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <div>
      Olá
      <Botao principal={false} fontSize="14px">
        Clique aqui
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Botao novo</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste

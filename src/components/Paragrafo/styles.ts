import styled from 'styled-components'
import { Props } from '.'

export const Paragrafo = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
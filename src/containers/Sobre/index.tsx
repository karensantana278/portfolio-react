import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
      perferendis fugiat similique doloribus sint ipsa facere provident
      voluptatibus aliquam tenetur quidem culpa fuga aperiam accusamus, eveniet,
      alias nostrum tempore accusantium.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=karensantana278&show_icons=true&theme=midnight-purple&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=karensantana278&layout=compact&langs_count=7&theme=midnight-purple" />
    </GithubSection>
  </section>
)

export default Sobre

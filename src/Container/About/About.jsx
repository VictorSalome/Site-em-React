import Header from "../../Components/Header/Header";
import Placa from "../../assets/placa1.jpg";
import Placa2 from "../../assets/placa2.jpg";
import Rentabilidade from "../../assets/retornoinvestimento.jpg";
import { Container } from "./styles";
import Footer from "../../Components/Footer/Footer";
import ButtonService from "../../Components/Button Service/Button";
import ButtonContact from "../../Components/ButtonContact/Button";


function About() {
  return (
    <Container>
      <div>
        <Header />
        <div>
          <h1>
            O Poder da Luz Solar: Como as Placas Solares Geram Energia Limpa
          </h1>
        </div>
        <div className="placa">
          <img src={Placa} alt="energia-placa" />
          <p>
            As placas solares, também conhecidas como painéis fotovoltaicos, são
            dispositivos cruciais na geração de energia solar. Elas operam
            através do efeito fotovoltaico, no qual células semicondutoras nas
            placas convertem a luz solar em eletricidade por meio da excitação
            de elétrons. Essa corrente elétrica é então convertida em
            eletricidade de corrente alternada por um inversor, tornando-a
            utilizável em residências e empresas. Esses sistemas sustentáveis
            podem ser instalados em telhados ou áreas bem expostas ao sol,
            reduzindo emissões de carbono, oferecendo independência energética e
            permitindo o armazenamento ou injeção de eletricidade excedente na
            rede elétrica, contribuindo para uma transição para uma matriz
            energética mais ecológica e econômica.
          </p>
        </div>

        <div className="placa2">
          <img src={Placa2} alt="energia-placa" />
          <p>
            A instalação de placas solares é um processo que envolve a avaliação
            do local, projeto personalizado, obtenção de permissões, instalação
            dos painéis, conexões elétricas, testes e, em sistemas conectados à
            rede, a conexão à rede elétrica. Esses sistemas aproveitam a energia
            solar para gerar eletricidade, contribuindo para economia de
            energia, redução de contas de eletricidade e uma fonte sustentável
            de energia. A manutenção e monitoramento contínuos garantem o
            funcionamento eficaz do sistema.
          </p>
        </div>

        <div className="rentabilidade">
          <img src={Rentabilidade} alt="energia-placa" />
          <p>
            Utilizar energia solar é altamente rentável a longo prazo devido a
            economias significativas nas contas de eletricidade, incentivos
            financeiros e benefícios ambientais. Além de reduzir custos, aumenta
            o valor da propriedade e contribui para um futuro mais sustentável.
          </p>
        </div>
      </div>

      <div className="buttonsAbout">
        
        <ButtonContact />
        <ButtonService />
    

      </div>

      
      <Footer />
    </Container>
   

  );
}

export default About;

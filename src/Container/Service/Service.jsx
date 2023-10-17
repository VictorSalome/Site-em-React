import ButtonContact from "../../Components/ButtonContact/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Slide2 from "../../Components/Slider 2/slide";
import Slide3 from "../../Components/Slider 3/slide";
import Slide from "../../Components/Slider/slide";
import { ContainerService } from "./styles";

function Service() {
  return (
    <ContainerService>
      <Header />
      <div>
        <h1>CONHEÇA MAIS SOBRE NÓS</h1>
        <h2>O Que fazemos e com o que trabalhamos?</h2>
        <p>
          Somos uma empresa que buscar trazer a eficinença e conomia e
          praticidade no ramo eletrico.
        </p>
        <h2>
          Oferecemos soluções completas de energia solar e eletrica em apenas um
          lugar.
        </h2>

        <p>
          Nossa empresa oferece instalação profissional e manutenção confiável
          de painéis solares. Nossos especialistas cuidam de tudo, garantindo
          que você desfrute de uma fonte de energia limpa e sustentável. Além de
          contribuir para o meio ambiente, a energia solar também gera economias
          significativas a longo prazo, tornando-a uma escolha rentável para sua
          residência ou empresa.
        </p>
      </div>
      <div className="slide1">
      <Slide/>
      </div>
      
      <h1 className="h1-second">
        Oferecemos Mais do que Energia Solar oferecemos Soluções
      </h1>
      <div className="slide2">
      <Slide2 />
      </div>
     
      <p className="p-second">
        Somos especialistas em energia elétrica, fornecendo serviços abrangentes
        que incluem manutenção de alta qualidade e instalações prediais.
        Não somos apenas especializados em energia solar, mas também em todas as
        suas necessidades elétricas. Nossa equipe altamente qualificada realiza
        instalações elétricas seguras, de acordo com as normas mais rigorosas,
        além de fornecer serviços de manutenção preditiva e preventiva.
      </p>
      <h2 className="h1-tree">
        Estamos prontos para atender às necessidades de sua empresa em
        instalações prediais
      </h2>
      <div className="slide3">
      <Slide3 />
      </div>
      
      <p className="p-tree">
      Nossos serviços garantem infraestruturas seguras e eficientes, fundamentais para o funcionamento bem-sucedido de sua empresa. Conte conosco para soluções de alta qualidade em instalações prediais que atendem às suas necessidades. Seja na construção, modernização ou manutenção, estamos comprometidos com seu sucesso.
      </p>
      
      <div className="buttonContact">
      <ButtonContact/>
      </div>
      
      <Footer />
    </ContainerService>
  );
}

export default Service;

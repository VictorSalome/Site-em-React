import { ContainerMain, HomeStyles } from "./styles";
import ButtonGreen from "../../Components/ButtonGreen/Button";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeStyles>
        <ContainerMain>
          <h1>Brilhando Sobre Nós: O Futuro da Energia Solar</h1>
          <p>
            A energia solar é uma fonte renovável que converte a luz do sol em
            eletricidade, reduzindo emissões de carbono e oferecendo uma
            alternativa sustentável e econômica à energia convencional.
          </p>
          <ButtonGreen className="ButtonGreen" />
        </ContainerMain>
      </HomeStyles>
      <Footer />
    </>
  );
}

export default App;

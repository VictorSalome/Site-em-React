import styled from "styled-components";
import LogoTitulo from "../../assets/titulo-placa.jpg";
import Fundo from "../../assets/fundo.jpg";

export const Container = styled.div`

background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 20vh;
  img {
    width: 30%;
    height: 30%;
    margin-top: 50px;
    border-radius: 40px;
    margin-right: 20px;
    margin-left: 30px;
  }

  h1 {
    margin-top: 50px;
    margin-left: 30px;
    background-image: url(${LogoTitulo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    text-align:start;
    font-size: 40px;
    font-weight: bold;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

  }

  .placa {
    
    display: flex;
    margin-bottom: 60px;
    

    p {
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: justify;
      padding: 30px;
      
    }
  }

.placa2 {
    display: flex;
    flex-direction: row-reverse;
    
    

    p {
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: justify;
      padding: 30px;
      
      
    }

}


.rentabilidade {
    display: flex;

    
    

    p {
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: justify;
      padding: 30px;
      
      
    }

}

.buttonsAbout{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 50px; 

    :hover{
      color: rgba(0, 0, 0, 0.5);

    }
    
    
    button{
      width: 200px;
      height: 50px;
      border-radius: 20px;
      border: none;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer    

  }

 
}




`







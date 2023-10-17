import styled from "styled-components";
import Fundo from "../../assets/fundo.jpg";

export const Container = styled.div`

background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 100vh;


img{
  display: flex;
  width: 39%;
  margin-left: 1000px;



}


  .contatoContainer {
    
    .subContainerContato {
      display: flex;
      flex-direction: column;
      margin-right: 50%;
      margin-left: 5%;
      margin-top: -600px;
  
    }
  }

  .formulario {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 600px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 50px;
    height: 400px;
    border: none;
    
   
    input {
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 10px;
      color: black;
  
    }

    .input-submit{
      width: 30%;
      margin-left: 190px;
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
      
    
      
    }

    .input-submit:hover{
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .contatosRedesContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 30px;
    margin-top: -380px;
    
    
  }

`;

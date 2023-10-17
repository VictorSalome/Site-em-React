import styled from "styled-components";
import Fundo from "../../assets/fundo.jpg";

export const ContainerService = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 261.5vh;

  h1 {
    margin-top: 70px;
    margin-bottom: 100px;
    margin-left: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  h2 {
    font-size: 24px;
    display: flex;
    justify-content: baseline;
    margin-bottom: 5px;
    margin-left: 200px;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  p {
    margin-left: 200px;
    margin-bottom: 40px;
  }

  .h1-second {
    font-size: 24px;
    display: flex;
    justify-content: baseline;
    margin-bottom: 50px;
    margin-right: 950px;
    
  }
 
  .p-second {
    margin-bottom: 50px;
    margin-top: 50px;

  }
.p-tree {
  margin-top: 50px;
}

.h1-tree {
  margin-bottom: 50px;
}


.buttonContact {
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

`;

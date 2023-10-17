import styled from "styled-components";

import imagenLogin from "../../assets/energia2.jpg";

export const ContainerLogin = styled.div`
  background-image: url(${imagenLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 40px;
    align-items: center;
    text-align: center;
  }

  li {
    margin-top: 20px;
    font-size: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
    cursor: pointer;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
    margin-left: 310px;
  }
`;

export const ContainerMain = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  border-radius: 30px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 40px;

  input {
    width: 500px;
    height: 45px;
    border: none;
    border-radius: 10px;
    padding-left: 30px;
    align-items: center;
  }
`;

export const Button = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    height: 40px;
  }
`;

export const Icons = styled.div`
  position: absolute;

  padding: 12px;
`;

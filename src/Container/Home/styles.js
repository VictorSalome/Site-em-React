import styled from 'styled-components';
import Logo from "../../assets/energia.jpg";




export const HomeStyles = styled.div`


h1{
color:  black;
font-size: 50px;
font-weight: 900;
line-height: normal;
margin-left: 879px;
margin-top: 217px;

}


p{
color: black;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 879px;
width: 600px;

}


.logo1{
width: 25%;
margin-top: -590px;
margin-left: 125px;
border-radius: 50%;


}


Button{
    margin-left: 879px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 239px;
    height: 64px;
    margin-top: 120px;
    margin-bottom: 120px;
    border: none;
    border-radius: 22px;

    font-size: 20px;
    font-weight: bold;
    text-align: center;


    
}

`

export const ContainerMain = styled.div`
background-image: url(${Logo}); 
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
height: 55vh;
margin-bottom: 200px;







`


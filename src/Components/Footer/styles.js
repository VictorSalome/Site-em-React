import styled from "styled-components";


export const FooterStyles = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 50px;

  footer {
    background-color: rgba(0, 0, 0, 0.3) ;
   
    height: 200px;
    
  }

  .container-footer {
    max-width: 1400px;
    padding: 0 4%;
    margin: auto;
    
  }
  .row-footer {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-col {
    margin-top: 20px;
    width: 25%;
    padding: 0 15px;
   
  }

  .footer-col h4 {
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
  }
  .footer-col ul {
    list-style: none;
  }

  .footer-col ul li {
    max-width: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
  }

  .footer-col ul li svg {
    margin-right: 10px;
    color: white;
  }

  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: black;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
  }

  .icons {
    display: flex;
    justify-content: flex-start;
    flex-direction: inherit;
    gap: 50px;
    padding: 10px;
    font-size: 40px;

    :hover{
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .footer-col ul li a:hover {
    color: #848484;
    padding-left: 10px;
  }


.form-sub{
    margin-left: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
}

  .footer-col .form-sub input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid #848484;
    color: white;
    background: transparent;

  }
`;

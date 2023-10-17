
import Header from "../../Components/Header/Header"
import { Container } from "./styles"
import  TelaContato from "../../assets/contact.png";
import Footer from "../../Components/Footer/Footer";






function Contact () {
    return (
      
        
        <Container>
             <Header/>
             <div className="contatoContainer">
             <img src={TelaContato} alt="imgContato" />
              
               <div className="subContainerContato">
                <div> 
                  <h1>FALE CONOSCO</h1>
              
                </div>
            
               <form className="formulario">
               <input type="text" name="name" placeholder="Nome" id="" />
                    <input type="email" name="email" placeholder="Email" id="" />
                    <input type="text" name="subject" placeholder="Assunto" id="" />
                    <textarea name="message" placeholder="Mensagem" id="" cols="85" rows="10"></textarea>
                    <input className="input-submit" type="submit" value="Enviar" />
               </form>
                    
               
               </div>
             
             </div>
             <Footer />
             </Container>
            
          
    )}

    

export default Contact
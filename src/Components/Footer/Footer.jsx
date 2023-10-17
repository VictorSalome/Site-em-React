import { FooterStyles } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <FooterStyles>
        <footer>
          <div className="container-footer">
            <div className="row-footer">
              <div className="footer-col">
                <h4>Sobre Nós</h4>
                <ul>
                  <li>
                    <Link to="/about">Quem somos</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contato</Link>
                  </li>
                  <li>
                    <Link to="/service">Serviços</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Midias Socias</h4>
                <ul>
                  <li>
                    <FaFacebook />
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <FaInstagram />
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <FaWhatsapp />
                    <a href="#">WhatsApp</a>
                  </li>
                </ul>
              </div>

              <div className="form-sub">
                <form>
                  <input
                    type="email"
                    placeholder="Insira seu e-mail"
                    required
                  />
                  <button>Inscreva-se</button>
                  <div className="icons">
                    <BiLogoFacebookSquare />
                    <BiLogoInstagram />
                    <BiLogoWhatsapp />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </FooterStyles>
    </>
  );
}
export default Footer;

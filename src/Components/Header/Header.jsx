import ButtonPurple from "../ButtonPurple/Button"
import {ContainerHeader,HeaderStyles} from './styles'
import { Link } from "react-router-dom"

function Header() {
    return (
        <ContainerHeader>
            
            <HeaderStyles>
                <Link to="/">Home</Link>
            </HeaderStyles>

            <HeaderStyles>
                <Link to="/service">Service</Link>
            </HeaderStyles>

            <HeaderStyles>
                <Link to="/contact">Contact</Link>
            </HeaderStyles>

            <HeaderStyles>
                <Link to="/about">About</Link>
            </HeaderStyles>
 
           
            <ButtonPurple/>
        </ContainerHeader>
    )
}
export default Header
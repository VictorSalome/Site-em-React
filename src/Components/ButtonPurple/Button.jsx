import { Link } from 'react-router-dom';
import {ButtonStyles} from './styles';

function ButtonPurple() {
    return (
        <div>
            <ButtonStyles>
                <Link to="/login">Login</Link>
            </ButtonStyles>

        </div>
    )
}

export default ButtonPurple


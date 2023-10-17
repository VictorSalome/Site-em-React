import { FaFacebook, FaGoogle, FaLock, FaRegUser } from "react-icons/fa";
import { Button, ContainerLogin, ContainerMain, Icons, Input } from "./styles";


function Login() {
  return (
    
        <>
       

    <ContainerLogin> 
      <ContainerMain>
        <div>
          <h1>Sing in to your account</h1>
        </div>

        <div>
          <ul>
            <li>
              <FaFacebook />
              <FaGoogle />
            </li>
          </ul>
        </div>

        <div>
          <p>Or use your account</p>
        </div>

        <Input>
          <div>
            <Icons>
              <FaRegUser />
            </Icons>

            <input type="text" placeholder="Email" />
          </div>

          <div>
            <Icons>
              <FaLock />
            </Icons>

            <input type="password" placeholder="Password" />
          </div>
        </Input>

        <div>
          <a href="#">Forgot your password?</a>
        </div>

        <Button>
          <button>Sing in</button>
        </Button>
      </ContainerMain>
    </ContainerLogin>
    </>
  );
}

export default Login;

import "../css/login.css";
import { useEffect } from "react";
import { login } from "../services/requests";
import { useNavigate } from "react-router-dom";
import logoNoir from "../images/logoNoir.png";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/home");
    }
  }, []);

  const LoginHandleChange = (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    login(email, password).then((response) => {
      navigate("/home");
    });
  };

  return (
    <>
      <div className="Connexionform">
        <div className="formBox">
          <form>
            <img src={logoNoir} className="logoNoir" alt="logo" />
            <div>
              <label>Email:</label>
              <input
                type="email1"
                name="email1"
                id="email1"
                placeholder="ex:admin@bigscreen.com"
              />
            </div>

            <div>
              <label>Mot de passe: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="mot de passe"
              />
            </div>

            <div className="Connect">
              <button className="btnConnect" onClick={LoginHandleChange}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

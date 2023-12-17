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

  /**
   * Handles the change event for the login form, preventing the default behavior,
   * extracting email and password from the form, and initiating the login process.
   * Upon successful login, navigates to the "/home" route.
   * @param {Event} event - The event object associated with the form change.
   */
  const LoginHandleChange = (event) => {
    event.preventDefault();

    // Extract email and password from the login form.
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Initiate the login process and navigate to the "/home" route upon success.
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
                type="email"
                name="email"
                id="email"
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

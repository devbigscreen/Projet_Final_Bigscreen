
import '../css/login.css';
import { useEffect } from 'react';
import { login } from '../services/requests';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") !== null)
        {
            navigate("/home")}
    },[])


    const LoginHandleChange = (event) => {
console.log("click")
event.preventDefault()
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value
console.log(password)
    login(email, password).then(response =>{
        console.log(response)
        navigate("/home")
    })
    }


  return (
    <>
    <div className="ConnexionformulaireCtnr">
        <div className="form">

        <form >
            <div className="mt-4 text-center">
            <label>Email:</label>
                <input type="email" name="email" id="email"  placeholder="ex:admin@bigscreen.com" />
            </div>

            <div className="mt-2 text-center">
            <label>Mot de passe: </label>
                <input type="password" name="password" id="password" placeholder="mot de passe" />
            </div>

            <div className="mt-4 text-center">
            <button className="btnConnect" onClick={LoginHandleChange}>Login</button>
            </div>
        </form>

        </div>
        
    </div>

</>

  );
};

export default Login;
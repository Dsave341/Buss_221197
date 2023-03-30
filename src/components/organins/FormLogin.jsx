import { Link, redirect, useNavigate } from "react-router-dom"; 
import { useRef } from 'react';
import Button from "../atoms/Button"
import Img from "../atoms/Img"
import WrapperInput from "../molecules/WrapperInput";
import WrapperTag from "../molecules/WrapperTag";
import '../../assets/styles/FormLogin.css'


function FormLogin() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = "http://34.225.239.102/api/iniciar";
  
    const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
      if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
        alert("campos vacios");
      }else{
        
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: newForm.get("usuario"),
          contrasenia: newForm.get("contrasenia"),
        }),
      };
  
      fetch(endPoint, options)
        .then((response) => response.json())
  
        .then((data) => {
          if(data.status === true){
            navigate("/busregister");
          }else{
            alert("Datos incorrectos")
          }
        });
      }
    };

    return (
      <form className="content-form" href={Form}>
        <div className="content-grup">
          <Img/>
          <div className="conten-grup-one">
            <WrapperInput htmlFor="userName" msn="Username:" type="text" id_input="User" id_label="User" name='usuario' required/>
            <WrapperInput htmlFor="userPassword" id_input='Password' id_label='Password' msn="Password" type="password" name='contrasenia' required/>
          </div>
          <div className="content-grup-two">
            <Button onClick={handlerClick} msn="Login" btn/>
            <WrapperTag msn="Don't have an account?" to="/register" txt="Singup"/>
          </div>
        </div>
      </form>
    );
}

export default FormLogin;
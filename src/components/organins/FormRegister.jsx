import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WrapperInput from "../molecules/WrapperInput"
import Img from "../atoms/Img"
import Button from "../atoms/Button"
import '../../assets/styles/FormRegister.css'
function FormRegister() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = 'http://34.225.239.102/api/registrar/usuario'


    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
    
        if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){//el simbolo de pesos despues se nombra la variable
            alert("campos vacios");
        }else{
            
        const options = {
    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: newForm.get("nombre"),
            usuario: newForm.get("usuario"),
            correo: newForm.get("correo"),
            contrasenia: newForm.get("contrasenia"),
          }),
        };
        fetch(endPoint, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            if(data.status === true){
                navigate("/");
              }else{
                alert("No se agrego")
              }
          });
        }
      }

  return (
      <form className='content-form' ref={Form}>
        <div className="content-grup">
            <Img/>
            <div className='content-grup-one-R'>
              <WrapperInput id_label='nameregister' id_input='nameregister' required msn="Name" type="text" name="nombre"/>
              <WrapperInput id_input='emailregister' id_label='emailregister' required msn="E-mail" type="email" className="inputsText" name="correo"/>
              <WrapperInput id_input='userregister' id_label='userregister' required msn="Username" type="text" name="usuario"/>
              <WrapperInput id_input='passregister' id_label='passregister' required msn="Password" type="password" name="contrasenia"/>
            </div>
            <Button onClick={handlerClick} msn= "Register"/>
        </div>
      </form>
  );
}

export default FormRegister;
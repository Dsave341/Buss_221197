import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Img from "../atoms/Img"
import Button from "../atoms/Button"
import WrapperInput from "../molecules/WrapperInput"
import '../../assets/styles/FormBusRegister.css'
import Logo from "../../assets/img/Bus.png"

function FormBusRegister() {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = " http://34.225.239.102/api/autobus/register";

  const handlerClick = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){
        alert("campos vacios");
    }else{
        
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: newForm.get("clave"),
        placa: newForm.get("placa"),
        numasientos: newForm.get("numasientos"),
        fecha: newForm.get("fecha"),
        tipo: newForm.get("tipo"),
        nombre: newForm.get("nombre"),
        licencia: parseInt(10000 + Math.random() * 90000),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
      
        if(data.status === true){
            console.log("Creado exitosamente");
            alert("la Alta fue Exitosa");
          }
      });
    }
  };

    return (  
      <form className="content-form" ref={Form}>
          <div className="content-grup">
              <Img imgR/>
              <div className="content-grup-one">
                  <div className="grup-one">
                      <WrapperInput id_input='buskey' id_label='buskey' msn="Bus Key" type="text" name='clave' inp/>
                      <WrapperInput id_input='busplate' id_label='busplate' msn="Bus Plate" type="text" name='placa' inp/>
                  </div>
                    <div className="grup-two">
                      <WrapperInput id_input='numberseats' id_label='numberseats' msn="Number of Seats" type="text" name='numasientos' inp/>
                      <WrapperInput id_input='date' id_label='date' msn="Registratio Date" type="date" name='fecha' inp/>
                  </div>
              </div>
              <div className="content-grup-two">
                  <WrapperInput id_input='dName' id_label='dName' msn="Drive's Name" type="text" name='tipo'/>
                  <WrapperInput id_input='lNumber' id_label='lNumber' msn="License Number" type="text" name='licencia'/>
              </div>
              <Button onClick={handlerClick} msn="Register Bus"/>
          </div>
      </form>
    );
}

export default FormBusRegister;
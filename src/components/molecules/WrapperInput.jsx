import Label from "../atoms/Label";
import Input from "../atoms/Input";

function WrapperInput({ htmlFor,id_label, id_input, msn, type, name}) {
    return (
        <div>
            <Label htmlFor={htmlFor} id={id_label} msn={msn}/>
            <Input type={type} id={id_input} name={name} required/>
        </div>
    );
}

export default WrapperInput;
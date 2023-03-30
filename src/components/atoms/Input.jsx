import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    margin: 2% 0 4% 0;
    border-radius: 10px;
    height: 4vh;
    ${props => props.in && `
        width: 100%;
    `}
`;

function Input({id, name, type, inp}) {
    return (
        <StyledInput id={id} name={name} type={type} required inp={inp}/>
    );
}

export default Input;
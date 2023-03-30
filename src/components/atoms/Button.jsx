import styled from "styled-components";

const StyledButton = styled.button`
    width: 55%;
    height: 5vh;
    margin: 0 0 0 1%;
    background-color: black;
    color: white;
    border-radius: 15px;
    border: 2px solid #fff;
    ${props => props.btn && `
        width: 70%;
        height: 5vh;
        margin: 0 0 0 16%;
        background-color: black;
        color: white;
        border-radius: 15px;
        border: 2px solid #fff;
    `}
`;

function Button({onClick, msn, btn}) {
    return (
        <StyledButton type="button" onClick={onClick} btn={btn}>{msn}</StyledButton>
    );
}

export default Button;
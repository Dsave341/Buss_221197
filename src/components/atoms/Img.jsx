import styled from "styled-components";
import Logo from '../../assets/img/Bus.png'

const StyledImg = styled.img`
    align-items: center;
    background-color: white;
    width: 30%;
    margin: 5% 35% 0 35%;
    border-radius: 50%;
    margin-bottom:10%;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
    ${props => props.imgR && `
        align-items: center;
        background-color: white;
        width: 30%;
        margin: 0 35% 0 35%;
        border-radius: 50%;
        box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
    `}
`;

function Img({imgR}) {
    return (
        <StyledImg src={Logo} imgR={imgR}/>
    );
}

export default Img;
import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

const StyledDiv = styled.div`
    display: block;
    margin: 0 0 0 30%;
`;

function WrapperTag({msn, to, txt}) {
    return (
        <StyledDiv>
            <Text msn={msn}/>
            <Link to={to}>{txt}</Link>
        </StyledDiv>
    );
}

export default WrapperTag;
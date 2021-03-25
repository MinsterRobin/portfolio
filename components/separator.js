import style from "../styles/Separator.module.css";
import styled from "styled-components";

const Separator_SC = styled.hr`
    background: linear-gradient(to right, #111111, #FDB7B7 35%, #F9DCDC 50%, #FDB7B7 65%, #111111);
    box-shadow: 0 -2px 5px #252525, 0 2px 5px #000000;
    height: 2px;
    width: 45%;
    border: transparent;
    margin: 200px 0;
`;

const Separator = () => {
    return(
        <Separator_SC />
    );
};

export default Separator;
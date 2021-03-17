import Image from "next/image";
import styled from "styled-components";

const Hamburger_Menu_SC = styled.div`
    z-index: 10;
    height: 100%;
    display: flex;
`;

const Hamburger_Menu = (props) => {
    return (
        <Hamburger_Menu_SC onClick={() => props.setOpen(!props.open)}>
            <Image src="/menu.svg" alt="Hamburger Menu" width="20px" height="20px"/>
        </Hamburger_Menu_SC>
    );
};

export default Hamburger_Menu;

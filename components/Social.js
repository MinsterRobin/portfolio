import styled from "styled-components";

const Social_SC = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    cursor: pointer;
    
    .social_logo {
        width: 20px;
    }
    
    .social_ring {
        background-color: transparent;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all 0.8s;
    }
    
    .social_ring:hover {
        transform: rotateZ(20deg);
    }
`;

const Social = (props) => {
    return(
        <Social_SC onClick={() => window.open(props.url, "_blank")}>
            <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring" />
            <img className="social_logo" src={props.src_logo} alt={props.alt} />
        </Social_SC>
    );
};

export default Social;
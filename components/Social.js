import styled from "styled-components";
import SpringAnimation from "./Animations/SpringAnimation";
import {useRef} from "react";
import useIsInViewport from "./useIsInViewport";
import {animated} from "react-spring";

const Social_SC = animated(styled.div`
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
`);

const Social = (props) => {
    const wrapperRef = useRef(null);
    const isInViewport  = useIsInViewport(wrapperRef);

    return(
        <Social_SC ref={wrapperRef} style={SpringAnimation(isInViewport, props.appearance_animation_delay)} onClick={() => window.open(props.url, "_blank")}>
            <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring" />
            <img className="social_logo" src={props.src_logo} alt={props.alt} />
        </Social_SC>
    );
};

export default Social;
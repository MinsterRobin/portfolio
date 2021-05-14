import styled, {keyframes} from "styled-components";
import React, {useEffect, useRef, useState} from "react";

const animation_fade_in = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const FadeIn = styled.div`
    animation: ${animation_fade_in} ${props => props.duration || "0.5s"} ease-in-out;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;

const animation_fade_in_up = keyframes`
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 10%, 0);
        transform: translate3d(0, 10%, 0);
    } to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`;

const FadeInUp = styled.div`
    animation: ${animation_fade_in_up} ${props => props.duration || "0.5s"} ease-in-out;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;

const animation_fade_in_right = keyframes`
    from {
        opacity: 0;
        -webkit-transform: translate3d(-40%, 0%, 0);
        transform: translate3d(-40%, 0%, 0);
    } to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`;

const FadeInRight = styled.div`
    animation: ${animation_fade_in_right} ${props => props.duration || "0.5s"} ease-in-out;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;


const SC_Anim_FirstAppear_FadeInUp = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    transform: translate3d(0, ${props => props.show ? 0 : "13%"}, 0);
    transition: opacity ease-in-out ${props => props.animation_duration || "0.5s"}, transform ease-in-out ${props => props.duration || "0.5s"};
    width: ${props => props.width};
    height: ${props => props.height};
`;

const Anim_FirstAppear_FadeInUp = (props) => {
    const [show, setShow] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const getComponentPosYFromTop = element => element.getBoundingClientRect().top;
        const getComponentHeight = element => element.getBoundingClientRect().height;
        const componentPosYMiddleFromTop = getComponentPosYFromTop(componentRef.current) + (getComponentHeight(componentRef.current) / 2);

        const onScroll = () => {
            const currentScrollPos = window.scrollY + window.innerHeight;
            if (componentPosYMiddleFromTop < currentScrollPos) {
                const animationDelay = setTimeout(() => setShow(true), props.animation_delay);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <SC_Anim_FirstAppear_FadeInUp
            animation_duration={props.animation_duration}
            width={props.width}
            height={props.height}
            show={show}
            ref={componentRef}>
            {props.children}
        </SC_Anim_FirstAppear_FadeInUp>
    );
};



export default {FadeIn};

export {FadeInUp, FadeInRight, FadeIn, Anim_FirstAppear_FadeInUp};
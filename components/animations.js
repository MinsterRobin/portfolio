import styled, {keyframes} from "styled-components";

const animation_fade_in = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const FadeIn = styled.div`
    animation: ${animation_fade_in} ${props => props.duration || "0.5s"} ease-in-out;
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
`;

export default {FadeIn};

export {FadeInUp, FadeInRight, FadeIn};
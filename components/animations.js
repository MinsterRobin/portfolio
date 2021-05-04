import styled, {keyframes} from "styled-components";

const animation_fade_in = keyframes`
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

const FadeIn500 = styled.div`
    animation: ${animation_fade_in} 0.5s ease-in;
`;

const FadeIn1000 = styled.div`
    animation: ${animation_fade_in} 1.5s ease-in;
`;

export default FadeIn500;

export {FadeIn1000, FadeIn500};
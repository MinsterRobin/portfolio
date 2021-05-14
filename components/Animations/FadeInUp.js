import styled from "styled-components";

const FadeInUp = styled.div`
    opacity: ${props => props.playAnimation ? 1 : 0};
    transform: translate3d(0, ${props => props.playAnimation ? 0 : "13%"}, 0);
    transition: opacity ease-in-out ${props => props.animation_duration || "0.5s"}, transform ease-in-out ${props => props.duration || "0.5s"};
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default FadeInUp;
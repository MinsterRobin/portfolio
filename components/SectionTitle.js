import styled from "styled-components";
import {animated} from "react-spring";
import React, {useRef} from "react";
import useIsInViewport from "./useIsInViewport";
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";
import SpringAnimation from "./Animations/SpringAnimation";

const SectionTitle_SC = animated(styled.p`
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.2em;
    margin: 0 0 80px 0;
`);

const SectionTitle = (props) => {
    const wrapperRef = useRef(null);
    const isInViewport = useIsInViewport(wrapperRef);

    return (
        <SectionTitle_SC ref={wrapperRef} style={SpringAnimation(isInViewport)}>
            <Text_LanguageBased_OpacityTransition_SC>
                {props.children}
            </Text_LanguageBased_OpacityTransition_SC>
        </SectionTitle_SC>
    )
};

export default SectionTitle;
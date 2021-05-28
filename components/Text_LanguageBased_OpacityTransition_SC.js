import styled from "styled-components";

const Text_LanguageBased_OpacityTransition_SC = styled.p`
    opacity: ${props => props.theme.languageTransition_Animation_TextOpacity};
    transition: opacity ease-in-out ${props => props.theme.languageTransition_Animation_Delay};
    margin: 0;
`;

export default Text_LanguageBased_OpacityTransition_SC;
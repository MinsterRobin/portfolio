import React, {useContext} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";

const LanguageSelector_SC = styled.div`
    z-index: 2;
    cursor: pointer;
    font-weight: normal;
    font-size: 14px;
    
    &:hover {
        opacity: 0.7;
        transition: 300ms ease-in-out opacity;
    }
`;

const SpanEn_SC = styled.span`
    text-decoration: ${props => props.theme.currentLanguage === "eng" ? 'overline' : ''};
    opacity: ${props => props.theme.languageTransition_Animation_TextOpacity};
    transition: opacity ease-in-out ${props => props.theme.languageTransition_Animation_Delay};
`;

const SpanFr_SC = styled.span`
    text-decoration: ${props => props.theme.currentLanguage === "fr" ? 'overline' : ''};
    opacity: ${props => props.theme.languageTransition_Animation_TextOpacity};
    transition: opacity ease-in-out ${props => props.theme.languageTransition_Animation_Delay};
`;

const LanguageSelector = () => {
    const [languageContext, setLanguageContext] = useContext(Language_Context);

    return (
        <LanguageSelector_SC onClick={ () => {
            setLanguageContext({
                ...languageContext,
                languageTransition_Animation_TextOpacity: "0"
            });
            setTimeout(() => {
                setLanguageContext({
                    ...languageContext,
                    currentLanguage: languageContext.currentLanguage === "fr" ? "eng" : "fr",
                    languageTransition_Animation_TextOpacity: "1"
                });
            }, 300);
        }}>
            <SpanEn_SC>EN</SpanEn_SC> | <SpanFr_SC>FR</SpanFr_SC>
        </LanguageSelector_SC>
    );
};

export default LanguageSelector;
import React, {useContext} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";

const LanguageSelector_SC = styled.div`
    z-index: 2;
    cursor: pointer;
    font-weight: normal;
    font-size: 14px;
    
    &:hover {
        opacity: 0.85;
        transition: 300ms ease-in-out opacity;
    }
`;

const SpanEn_SC = styled.span`
    text-decoration: ${props => props.currentLanguage === "eng" ? 'overline' : ''};
    opacity: ${props => props.textOpacity};
    transition: opacity ease-in-out 300ms;
`;

const SpanFr_SC = styled.span`
    text-decoration: ${props => props.currentLanguage === "fr" ? 'overline' : ''};
    opacity: ${props => props.textOpacity};
    transition: opacity ease-in-out 300ms;
`;

const LanguageSelector = () => {
    const [languageContext, setLanguageContext] = useContext(Language_Context);

    return (
        <LanguageSelector_SC onClick={ () => {
            setLanguageContext({
                ...languageContext,
                textOpacity: "0"
            });
            setTimeout(() => {
                setLanguageContext({
                    currentLanguage: languageContext.currentLanguage === "fr" ? "eng" : "fr",
                    textOpacity: "1"
                });
            },300);
        }}>
            <SpanEn_SC textOpacity={languageContext.textOpacity} currentLanguage={languageContext.currentLanguage} >EN</SpanEn_SC> | <SpanFr_SC textOpacity={languageContext.textOpacity} currentLanguage={languageContext.currentLanguage} >FR</SpanFr_SC>
        </LanguageSelector_SC>
    );
};

export default LanguageSelector;
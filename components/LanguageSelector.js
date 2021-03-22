import React, {useContext} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";

const LanguageSelector_SC = styled.div`
z-index: 2;
    cursor: pointer;
    font-weight: normal;
    font-size: 14px;
`;

const SpanEn_SC = styled.span`
    text-decoration: ${props => props.language === "eng" ? 'overline' : ''}; 
`;

const SpanFr_SC = styled.span`
    text-decoration: ${props => props.language === "fr" ? 'overline' : ''}; 
`;

const LanguageSelector = () => {
    const [language, setLanguage] = useContext(Language_Context);

    return (
        <LanguageSelector_SC onClick={ () => {setLanguage(language === "fr" ? "eng" : "fr")} } >
            <SpanEn_SC language={language} >EN</SpanEn_SC> | <SpanFr_SC language={language} >FR</SpanFr_SC>
        </LanguageSelector_SC>
    );
};

export default LanguageSelector;
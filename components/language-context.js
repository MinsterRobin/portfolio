import React from "react";

const Language_Context = React.createContext(
    {
        currentLanguage: "fr",
        languageTransition_Animation_TextOpacity: "1",
        languageTransition_Animation_Delay: "300"
    });

export default Language_Context;
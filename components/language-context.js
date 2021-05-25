import React from "react";

const Language_Context = React.createContext(
    {
        currentLanguage: "fr",
        textOpacity: "1"
    });

export default Language_Context;
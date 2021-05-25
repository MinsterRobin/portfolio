import styled from "styled-components";

const ChangingText_SC = styled.p`
    opacity: ${props => props.textOpacity};
    transition: opacity ease-in-out 300ms;
`;

// const ChangingText = (props) => {
//     const [languageContext] = useContext(Language_Context);
//
//     return (
//         <Text_SC textOpacity={languageContext.textOpacity} >{props.children}</Text_SC>
//     );
// };

export default ChangingText_SC;
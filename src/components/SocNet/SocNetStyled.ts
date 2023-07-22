import styled from "styled-components"

interface IProps {
    $justified: string
}

export const SocNetList = styled.ul<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.$justified === "center" ? "center" : "flex-start"};
`;

export const SocNetItem = styled.li`
&:not(:last-child){
    margin-right: 15px;
}
`
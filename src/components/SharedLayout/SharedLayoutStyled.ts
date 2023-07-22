import styled from "styled-components"

export const LayoutStyled = styled.div`
 

  background-color: ${(props) => props.theme.color.page};
`;

export const MainStyled = styled.main`
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};
`;
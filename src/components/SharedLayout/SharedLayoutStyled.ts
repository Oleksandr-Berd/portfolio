import styled from "styled-components"

export const LayoutStyled = styled.div`
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};

  background-color: ${(props) => props.theme.color.page};
`;
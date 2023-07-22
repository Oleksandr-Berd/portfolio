import styled from "styled-components"

export const FooterStyled = styled.footer`
  padding-top: ${(props) => props.theme.space[12]};
  padding-bottom: ${(props) => props.theme.space[12]};

  text-align: center;
  background-color: ${(props) => props.theme.color.grayish};
`;
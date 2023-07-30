import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding-top: ${(props) => props.theme.space[12]};
  padding-bottom: ${(props) => props.theme.space[12]};

  text-align: center;
  background-color: ${(props) => props.theme.color.mainText};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: ${(props) => props.theme.space[10]};
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 42px;
`;

import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};
`;

export const LogoContainer = styled.div`
min-width: 60px;
height: 42px;
`

export const LogoImage = styled.img`
  width: ${(props) => props.theme.percentage[10]};
  height: ${(props) => props.theme.percentage[10]};
`;
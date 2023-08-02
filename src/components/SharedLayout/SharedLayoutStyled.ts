import styled from "styled-components"

export const LayoutStyled = styled.div`
 

  background-color: ${(props) => props.theme.color.page};
`;

export const MainStyled = styled.main`
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};

  @media (min-width: 768px) {
    padding-right: ${(props) => props.theme.space[10]};
    padding-left: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`;
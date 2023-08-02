import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding-top: ${(props) => props.theme.space[12]};
  padding-bottom: ${(props) => props.theme.space[12]};

  text-align: center;
  background-color: ${(props) => props.theme.color.mainText};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: ${(props) => props.theme.space[6]};
    padding-bottom: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[10]};
    padding-right: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
    padding-top: ${(props) => props.theme.space[8]};
    padding-bottom: ${(props) => props.theme.space[8]};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: ${(props) => props.theme.space[10]};

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: ${(props) => props.theme.space[11]};
  }
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 42px;
`;

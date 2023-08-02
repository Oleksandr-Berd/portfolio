
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: ${(props) => props.theme.space[11]};

    padding-right: ${(props) => props.theme.space[10]};
    padding-left: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px){
    padding-left: 165px;
    padding-right: 165px;
  }
 
`;

export const LogoContainer = styled.div`
  min-width: 60px;
  height: 42px;

  @media (min-width: 1440px){
    width: 106px;
    height: 72px;
  }
`;

export const LogoImage = styled.img`
  width: ${(props) => props.theme.percentage[10]};
  height: ${(props) => props.theme.percentage[10]};
`;


export const ToggleTheme = styled.div`

& > *{
  margin: 0;
}
`

//desktop

export const DesktopContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

import styled from "styled-components";


interface IProps {
  $heroImage: string;
}

export const HeroContainer = styled.div<IProps>`
  padding-bottom: 96px;

  @media (min-width: 768px) {
    padding-top: 216px;

    padding-bottom: 0;
    margin-bottom: 96px;

    background-image: url(${(props) => props.$heroImage});
    background-size: contain;

    @media (min-width: 820px) {
      background-size: cover;
    }

    @media (min-width: 1440px) {
      background-size: contain;
      padding-top: 380px;
    }
  }
`;

export const HeroPic = styled.img`
  width: ${(props) => props.theme.percentage[10]};

  margin-bottom: ${(props) => props.theme.space[6]};
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[8]};

  font-size: ${(props) => props.theme.size.XXM};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.05;
  letter-spacing: -0.36px;

  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[6]};

    font-size: ${(props) => props.theme.size.XXN};
  }

  @media (min-width: 1440px){
    font-size: ${props => props.theme.size.XM}
  }
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[11]};

  text-decoration: none;

  font-size: ${(props) => props.theme.size.XXS};
  background-color: ${(props) => props.theme.color.dark};
  color: #fafafa;

  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${(props) => props.theme.color.hover};
    transition: color 0.3s ease-in-out;
  }
`;


export const IconContainer = styled.div`
margin-right: ${props => props.theme.space[11]};
`

export const ButtonText = styled.span`
  color: "#FAFAFA";
`;

//tablet

export const ContentContainer = styled.div`
  width: 414px;
  padding-top: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[12]};

  background-color: ${(props) => props.theme.color.page};

  @media (min-width: 1440px){
    width: 460px;
  }
`;
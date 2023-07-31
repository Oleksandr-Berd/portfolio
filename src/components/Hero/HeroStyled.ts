import styled from "styled-components";

export const HeroContainer = styled.div`
padding-bottom: 96px;
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
  color: ${(props) => props.theme.color.secondaryBody};
`;


export const IconContainer = styled.div`
margin-right: ${props => props.theme.space[11]};
`

export const ButtonText = styled.span`
  color: "#FAFAFA";
`;
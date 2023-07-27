import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const ImageContainer = styled.div`
padding-bottom: ${props => props.theme.space[8]};

border-bottom: 1px solid ${props => props.theme.color.border};
`

export const Image = styled.img`
  width: ${(props) => props.theme.percentage[10]};
`;

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.XXM};
  letter-spacing: -0.36px;
  line-height: 1.05;
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
`;

export const LinkButton = styled(NavLink)`
display: inline-block;

  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[9]};
  padding-top: 17px;
  padding-bottom: 17px;

  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.color.mainText};

  border: 1px solid ${(props) => props.theme.color.mainText};
`;

export const ItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[13]};
  }
`;
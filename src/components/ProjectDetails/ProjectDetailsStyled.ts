import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const ItemStyled = styled.div`
  margin-top: ${(props) => props.theme.space[2]};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[13]};
  }
`;

export const ImageContainer = styled.div`
  padding-bottom: ${(props) => props.theme.space[8]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

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

export const TechStackList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${props => props.theme.size.N};
  font-weight: ${props => props.theme.weight.bold};
  line-height: 2.31;
  color: ${(props) => props.theme.color.cyan};
`;

export const TechStackItem = styled.li`
  &:not(:last-child)::after {
    content: "/";
    margin-right: ${(props) => props.theme.space[1]};
    margin-left: ${(props) => props.theme.space[1]};
  }
`;
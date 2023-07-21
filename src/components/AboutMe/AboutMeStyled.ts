import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom:51px;
`;

export const AvatarPic = styled.img`
  width: ${(props) => props.theme.percentage[10]};

  margin-bottom: ${(props) => props.theme.space[8]};
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[7]};

  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1.05;
  font-weight: ${(props) => props.theme.weight.bold};
  letter-spacing: -0.36px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.88;
`;

export const ButtonLink = styled(NavLink)`
  display: inline-block;

  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[9]};

  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.grayish};
  background-color: transparent;

  border: 1px solid ${(props) => props.theme.color.grayish};
`;

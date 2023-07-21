import { NavLink } from "react-router-dom";
import styled from "styled-components"

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
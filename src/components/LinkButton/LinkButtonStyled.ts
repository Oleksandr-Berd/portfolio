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
  color: ${(props) => props.theme.color.mainText};
  background-color: transparent;

  border: 1px solid ${(props) => props.theme.color.mainText};

  @media (min-width: 1440px) {
    margin-top: ${(props) => props.theme.space[12]};

    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;


&:focus{
  outline: none;
}

    &:hover
    {
      background-color: ${(props) => props.theme.color.mainText};
      color: ${(props) => props.theme.color.hover};

      text-decoration: none;

      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }
`;
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { INavBarProps } from "../../utils/interfaces";

export const NavList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px) {
    margin-left: ${(props) => props.theme.space[10]};
  }
`;

export const Item = styled.li`

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[8]};

    @media (min-width: 768px) {
      margin-bottom: 0;

      margin-right: 42px;
    }
  }
`;

export const ItemLink = styled(NavLink)<Pick<INavBarProps, "$position" | "active">>`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.weight.normal};
  color: ${(props) =>
    props.$position === "footer"
      ? props.theme.color.secondaryBody
      : props.$position === "header" && props.active === "active"
      ? props.theme.color.cyan
      : props.theme.color.mainText};

  font-family: ${(props) => props.theme.fontFamily.body};
  font-size: ${(props) => props.theme.size.XS};
  letter-spacing: 2px;

  @media (min-width: 1440px) {
    font-size: ${(props) =>
      props.$position === "header" ? props.theme.size.S : props.theme.size.XS};

    transition: color 0.3s ease-in-out;

    &:active,
    &:focus {
      color: ${(props) => props.theme.color.cyan};
      border: none;
      outline: none;
    }

    &:hover {
      color: ${(props) => props.theme.color.hover};
      transition: color 0.3s ease-in-out;
      text-decoration: none;
    }
  }
`;


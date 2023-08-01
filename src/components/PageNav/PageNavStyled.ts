import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { INavBarProps } from "../../utils/interfaces";

export const NavList = styled.ul`
@media (min-width: 768px){
  display: flex;
  flex-direction: row;
  align-items: center;
}
`

export const Item = styled.li`

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[8]};

    @media (min-width: 768px) {
      margin-bottom: 0;

      margin-right: 42px;
    }
  }
`;

export const ItemLink = styled(NavLink)<Pick<INavBarProps, "position" | "active">>`

  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.weight.normal};
  color: ${(props) =>
    props.position === "footer"
      ? props.theme.color.secondaryBody
    : props.position === "header" && props.active === "active" ? props.theme.color.cyan :
    props.theme.color.mainText};
      
  font-family: ${(props) => props.theme.fontFamily.body};
  font-size: ${(props) => props.theme.size.XS};
  letter-spacing: 2px;
`;


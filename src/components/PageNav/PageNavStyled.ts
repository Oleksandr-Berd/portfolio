import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[8]};
  }
`;

export const ItemLink = styled(NavLink)`

  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.weight.normal};
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.fontFamily.body};
  font-size: ${props => props.theme.size.XS};
  letter-spacing: 2px;
`;


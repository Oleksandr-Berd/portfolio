import { Dropdown } from "react-bootstrap"
import styled from "styled-components"

export const DropDownContainer = styled.form`
margin-bottom: ${props => props.theme.space[6]};

text-align: center;
`

export const DropdownToggle = styled(Dropdown.Toggle)`
  background: transparent;
  color: ${(props) => props.theme.color.semiDark};
  font-family: ${(props) => props.theme.fontFamily.body};

  border-color: ${(props) => props.theme.color.border};

  &&&:active,
  &&&:focus,
  &&&:hover {
    background: transparent;
    color: ${(props) => props.theme.color.semiDark};
    border-color: ${(props) => props.theme.color.border};
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[4]};

  background: ${(props) => props.theme.color.dark};
`;

export const DropdownItem = styled(Dropdown.Item)`
  color: ${(props) => props.theme.color.secondaryBody};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[4]};
  }
`;
import { Dropdown } from "react-bootstrap"
import styled from "styled-components"
import { GrTechnology } from "react-icons/gr";


export const DropDownContainer = styled.form`
margin-bottom: ${props => props.theme.space[2]};

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

export const FilterLabel = styled.label`
display: inline-block;

  margin-bottom: ${(props) => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.N};
  font-style: italic;
  font-weight: ${props => props.theme.weight.bold};
`;

export const FilterInputContainer = styled.div`
position: relative;
`;

export const SearchFilterInput = styled.input`
  width: ${(props) => props.theme.percentage[10]};

  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[7]};

  font-size: ${(props) => props.theme.size.N};

  border-radius: ${props => props.theme.radius[1]};
`;

export const SearchIcon = styled(GrTechnology)`
position: absolute;
bottom:0;
left: 0;

transform: translateY(-90%) translateX(70%);

`

export const OrTitle = styled.p`
  margin-bottom: ${(props) => props.theme.space[2]};

  text-align: center;

  font-style: italic;
  font-weight: ${props => props.theme.weight.bold};
  font-size: ${props => props.theme.size.N};
`;


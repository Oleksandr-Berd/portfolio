import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { GrTechnology } from "react-icons/gr";

export const DropDownContainer = styled.form`
  margin-bottom: ${(props) => props.theme.space[2]};

  text-align: center;

  @media (min-width: 1440px) {
    width: ${(props) => props.theme.percentage[7]};
  }
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
  background: transparent;
  color: ${(props) => props.theme.color.mainText};
  font-family: ${(props) => props.theme.fontFamily.body};

  border-color: ${(props) => props.theme.color.border};

  &&&:active,
  &&&:focus,
  &&&:hover {
    background: transparent;
    color: ${(props) => props.theme.color.semiDark};
    border-color: ${(props) => props.theme.color.border};
  }

  @media (min-width: 1440px) {
    &&& {
      font-size: ${(props) => props.theme.size.XXN};
    }
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[4]};

  background: ${(props) => props.theme.color.page};

  @media (min-width: 1440px) {
    width: calc(
      ${(props) => props.theme.percentage[7]} -
        ${(props) => props.theme.space[8]}
    );

    padding-top: ${(props) => props.theme.space[10]};
    padding-bottom: ${(props) => props.theme.space[10]};
    padding-left: ${(props) => props.theme.space[8]};
  }
`;

export const DropdownItem = styled(Dropdown.Item)`
  color: ${(props) => props.theme.color.mainText};

  font-size: ${(props) => props.theme.size.N};
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[4]};
  }

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.XXN};

    transition: color 0.3s ease-in-out;

    &:hover,
    &:focus {
      background-color: transparent;
      color: ${(props) => props.theme.color.hover};

      text-decoration: none;

      transition: color 0.3s ease-in-out;
    }
  }
`;

export const FilterLabel = styled.label`
  display: inline-block;

  margin-bottom: ${(props) => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.N};
  font-style: italic;
  font-weight: ${(props) => props.theme.weight.bold};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FilterInputContainer = styled.div`
  position: relative;

  @media (min-width: 768px) {
    min-width: 257px;
  }

  @media (min-width: 768px) {
    min-width: 257px;
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.theme.percentage[10]};
  }
`;

export const SearchFilterInput = styled.input`
  width: ${(props) => props.theme.percentage[10]};

  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[7]};

  font-size: ${(props) => props.theme.size.N};

  border-radius: ${(props) => props.theme.radius[1]};

  &&&::placeholder {
    color: ${(props) => props.theme.color.placeholder};
  }

  @media (min-width: 1440px) {
    padding-left: ${(props) => props.theme.space[12]};
    padding-top: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};

    font-size: ${(props) => props.theme.size.XXN};
  }
`;

export const SearchIcon = styled(GrTechnology)`
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translateY(-90%) translateX(70%);

  @media (min-width: 1440px) {
    transform: translateY(-70%) translateX(70%);
  }
`;

export const OrTitle = styled.p`
  margin-bottom: ${(props) => props.theme.space[2]};

  text-align: center;

  font-style: italic;
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.N};

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.XXN};
  }
`;

export const ItemStyled = styled.div`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[13]};
  }

  &:last-child > li {
    margin-bottom: 0;
  }
`;

//tablet

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.space[8]};

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

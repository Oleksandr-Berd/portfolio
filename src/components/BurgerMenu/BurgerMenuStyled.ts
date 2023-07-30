import styled from "styled-components";
import { Button, Menu } from "@blueprintjs/core";

export const MenuButton = styled(Button)`
  &&& {
    background-color: transparent;
    border: none;

    box-shadow: none;
  }

  &:active,
  &:focus,
  &:hover {
    border: none;
    background-color: transparent;

    box-shadow: none;
  }
`;

export const MenuStyled = styled(Menu)`
  padding-top: ${(props) => props.theme.space[10]};
  padding-bottom: ${(props) => props.theme.space[10]};

  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) => props.theme.color.mainText};
  color: ${(props) => props.theme.color.secondaryBody};
  font-size: ${(props) => props.theme.size.XS};
  letter-spacing: 2px;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[8]};
  }
`;

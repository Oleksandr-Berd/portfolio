import { Popover } from "@blueprintjs/core";

import * as SC from "./BurgerMenuStyled"

import BurgerMenu from "./BurgerMenu";
import { ReactComponent as BurgerSvg } from "../../assets/images/icons/hamburger.svg"
import { ReactComponent as CloseSvg } from "../../assets/images/icons/close.svg"
import { IBurgerMenuProps } from "../../utils/interfaces";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";


const HamburgerMenu: React.FC<IBurgerMenuProps> = ({ handleMenu, isOpen }): JSX.Element => {
const {theme} = useContext(ThemeContext)


    return (<Popover content={<BurgerMenu handleMenu={handleMenu} />} placement="bottom" hasBackdrop={true} interactionKind="click" onClose={handleMenu}>
        <SC.MenuButton alignText="left" icon={isOpen ? <CloseSvg fill={theme === "dark" ? "#FAFAFA" : "#979797"} /> : <BurgerSvg fill={theme === "dark" ? "#FAFAFA" : "#979797"} />} onClick={handleMenu} />
    </Popover>);
}

export default HamburgerMenu;
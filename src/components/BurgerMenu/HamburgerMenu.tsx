import { Popover } from "@blueprintjs/core";

import * as SC from "./BurgerMenuStyled"

import BurgerMenu from "./BurgerMenu";
import { ReactComponent as BurgerSvg } from "../../assets/images/icons/hamburger.svg"
import { ReactComponent as CloseSvg } from "../../assets/images/icons/close.svg"
import { IBurgerMenuProps } from "../../utils/interfaces";


const HamburgerMenu: React.FC<IBurgerMenuProps> = ({ handleMenu, isOpen }): JSX.Element => {
    return (<Popover content={<BurgerMenu handleMenu={handleMenu} />} placement="bottom" hasBackdrop={true} interactionKind="click" onClose={handleMenu}>
        <SC.MenuButton alignText="left" icon={isOpen ? <CloseSvg /> : <BurgerSvg />} onClick={handleMenu} />
    </Popover>);
}

export default HamburgerMenu;
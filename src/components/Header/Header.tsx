import * as SC from "./HeaderStyled"

import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg"
import HamburgerMenu from "../BurgerMenu/PopOver";
import { useState } from "react";


const Header: React.FC = (): JSX.Element => {
const [isOpened, setIsOpened] = useState<boolean>(false)

    const handleMenu = () => {
        setIsOpened(!isOpened)
    }

    return (<SC.HeaderStyled><LogoSVG fill="#33323D" /> <HamburgerMenu handleMenu={handleMenu} isOpen={isOpened} /></SC.HeaderStyled> );
}
 
export default Header;
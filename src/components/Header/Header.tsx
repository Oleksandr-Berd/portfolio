import * as SC from "./HeaderStyled"

import logo from "../../assets/images/we_stand_with_ukraine_banner_template_doves_hands_flat_sketch_6922728/We stand with ukraine, dove and hands.jpg"
import HamburgerMenu from "../BurgerMenu/HamburgerMenu";
import { useState } from "react";


const Header: React.FC = (): JSX.Element => {
const [isOpened, setIsOpened] = useState<boolean>(false)

    const handleMenu = (): void => {
            setIsOpened(!isOpened)
    }

    return (<SC.HeaderStyled>
        <SC.LogoContainer>
            <SC.LogoImage src={logo} alt="logo" />
        </SC.LogoContainer>
        <HamburgerMenu handleMenu={handleMenu} isOpen={isOpened} /></SC.HeaderStyled>);
}
 
export default Header;
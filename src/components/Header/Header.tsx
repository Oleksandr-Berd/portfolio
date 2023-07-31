import { useState } from "react";
import { Switch } from "@blueprintjs/core";
import { BsSun } from 'react-icons/bs'

import * as SC from "./HeaderStyled"

import logo from "../../assets/images/we_stand_with_ukraine_banner_template_doves_hands_flat_sketch_6922728/We stand with ukraine, dove and hands.jpg"
import {ReactComponent as DarkThemeSvg} from "../../assets/images/icons/iconoir_half-moon.svg"

import HamburgerMenu from "../BurgerMenu/HamburgerMenu";



const Header: React.FC = (): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true)

    const handleMenu = (): void => {
        setIsOpened(!isOpened)
    }

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }


    return (<SC.HeaderStyled>
        <SC.LogoContainer>
            <SC.LogoImage src={logo} alt="logo" />
        </SC.LogoContainer>
        <div>
            <Switch labelElement={isLightTheme ? <BsSun size={16} /> : <DarkThemeSvg width={16} />} onChange={toggleTheme} checked={isLightTheme} />
        </div>
        <HamburgerMenu handleMenu={handleMenu} isOpen={isOpened} /></SC.HeaderStyled>);
}

export default Header;
import {  MenuItem } from "@blueprintjs/core";

import * as SC from "./BurgerMenuStyled"
import { useNavigate } from "react-router-dom";
import { IBurgerMenuProps } from "../../utils/interfaces";


const BurgerMenu: React.FC<IBurgerMenuProps> = ({handleMenu}): JSX.Element => {
    const navigate = useNavigate()

    const handleClick = (evt: any): void => {
        const path = evt.currentTarget.text === "home" ? "/" : evt.currentTarget.text === "contact me" ? "contact" : "portfolio"
        handleMenu()
        navigate(path)
    }

    return (<div>
        <SC.MenuStyled>
            <MenuItem onClick={handleClick} text="home" />
            <MenuItem onClick={handleClick} text="portfolio" />
            <MenuItem onClick={handleClick} text="contact me" />
        </SC.MenuStyled>
    </div>);
}

export default BurgerMenu;
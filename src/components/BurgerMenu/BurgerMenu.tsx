import { MenuItem } from "@blueprintjs/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IBurgerMenuProps, Project } from "../../utils/interfaces";
import { useAuth } from "../../hooks";
import * as SC from "./BurgerMenuStyled";

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ handleMenu }): JSX.Element => {

    const navigate = useNavigate();
    const { isLoggedIn } = useAuth()

    const handleClick = (evt: React.MouseEvent<HTMLElement>): void => {
        const target = evt.currentTarget as HTMLElement;
        const text = target.textContent;

        let path: string

        switch (text) {
            case "home":
                path = "/"
                break
            case "portfolio":
                path = "portfolio"
                break
            case "contact me":
                path = "contact"
                break
            case "add project":
                path = "admin/project"
                break
            default:
                return
        }

        handleMenu();
        navigate(path);
    };

    return (
        <div>
            <SC.MenuStyled>
                <MenuItem onClick={handleClick} text="home" />
                <MenuItem onClick={handleClick} text="portfolio" />
                <MenuItem onClick={handleClick} text="contact me" />
                {isLoggedIn ? <MenuItem onClick={handleClick} text="add project" /> : null}
            </SC.MenuStyled>
        </div>
    );
};

export default BurgerMenu;

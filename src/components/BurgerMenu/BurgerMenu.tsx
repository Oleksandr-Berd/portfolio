import { MenuItem } from "@blueprintjs/core";
import * as SC from "./BurgerMenuStyled";
import { useNavigate } from "react-router-dom";
import { IBurgerMenuProps } from "../../utils/interfaces";

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ handleMenu }): JSX.Element => {
    const navigate = useNavigate();

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


        // const path = text === "home" ? "/" : text === "contact me" ? "contact" : "portfolio" ? "portfolio" : "admin/project";
        handleMenu();
        navigate(path);
    };

    return (
        <div>
            <SC.MenuStyled>
                <MenuItem onClick={handleClick} text="home" />
                <MenuItem onClick={handleClick} text="portfolio" />
                <MenuItem onClick={handleClick} text="contact me" />
                <MenuItem onClick={handleClick} text="add project" />
            </SC.MenuStyled>
        </div>
    );
};

export default BurgerMenu;

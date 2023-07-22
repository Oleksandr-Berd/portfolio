import * as SC from "./HeaderStyled"

import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header: React.FC = (): JSX.Element => {
    return (<SC.HeaderStyled><LogoSVG fill="#33323D"/> <BurgerMenu/></SC.HeaderStyled> );
}
 
export default Header;
import * as SC from "./BurgerMenuStyled"

import { ReactComponent as BurgerSvg } from "../../assets/images/icons/hamburger.svg"

const BurgerMenu: React.FC = (): JSX.Element => {
    return (<div>
        <SC.MenuButton>
            <BurgerSvg />
        </SC.MenuButton>
    </div> );
}
 
export default BurgerMenu;
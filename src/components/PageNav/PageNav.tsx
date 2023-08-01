import * as SC from "./PageNavStyled"

import navPage from "../../database/navPages.json"
import { INavBarProps } from "../../utils/interfaces";
import NavBarItem from "./NavBarItem";

const PageNav:React.FC<Pick <INavBarProps, "position">> = ({position}):JSX.Element => {
    return (<SC.NavList>
        {navPage.map(({ id, title, path }) => <NavBarItem key={id} title={title} path={path} position={position} />)}
    </SC.NavList> );
}
 
export default PageNav;
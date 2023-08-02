import { INavBarProps } from "../../utils/interfaces";
import * as SC from "./PageNavStyled"

const NavBarItem: React.FC<Omit<INavBarProps, "id" | "active">> = ({ title, path, $position, pathname }): JSX.Element => {
    
    const active = pathname === path ? "active" : null;

    return (<SC.Item>
        <SC.ItemLink to={path} $position={$position} active={active}>{title}</SC.ItemLink>
    </SC.Item> );
}
 
export default NavBarItem;
import { INavBarProps } from "../../utils/interfaces";
import * as SC from "./PageNavStyled"

const NavBarItem: React.FC<INavBarProps> = ({ title, path, position }): JSX.Element => {
    return (<SC.Item>
        <SC.ItemLink to={path} position={position}>{title}</SC.ItemLink>
    </SC.Item> );
}
 
export default NavBarItem;
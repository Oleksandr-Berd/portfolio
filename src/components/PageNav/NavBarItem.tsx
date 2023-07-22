import { NavLink } from 'react-router-dom';
import * as SC from "./PageNavStyled"

interface IProps {
    id?: number,
    title: string,
    path: string,
}

const NavBarItem: React.FC<IProps> = ({ title, path }): JSX.Element => {
    return (<SC.Item>
        <SC.ItemLink to={path}>{title}</SC.ItemLink>
    </SC.Item> );
}
 
export default NavBarItem;
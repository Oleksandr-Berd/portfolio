import navPage from "../../database/navPages.json"
import NavBarItem from "./NavBarItem";

const PageNav = () => {
    return (<ul>
        {navPage.map(({ id, title, path }) => <NavBarItem key={id} title={title} path={path} />)}
    </ul> );
}
 
export default PageNav;
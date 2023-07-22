import * as SC from "./FooterStyled"

import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg"
import NavBar from '../NavBar/NavBar';
import PageNav from "../PageNav/PageNav";
import SocNet from "../SocNet/SocNet";


const Footer: React.FC = (): JSX.Element => {
    return (<SC.FooterStyled>
        <LogoSVG style={{marginBottom: "40px"}} fill="white"/>
        <NavBar navList={<PageNav />} margin={"40px"} />
        <NavBar navList={<SocNet />} />
    </SC.FooterStyled> );
}
 
export default Footer;
import { useContext } from "react";
import { useMediaQuery } from 'usehooks-ts';

import * as SC from "./FooterStyled"

import logo from "../../assets/images/we_stand_with_ukraine_banner_template_doves_hands_flat_sketch_6922728/We stand with ukraine, dove and hands.jpg"
import NavBar from '../NavBar/NavBar';
import PageNav from "../PageNav/PageNav";
import SocNet from "../SocNet/SocNet";
import ThemeContext from '../../context/themeContext';


const Footer: React.FC = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)

    const isMobile = useMediaQuery("(max-width:767px)")
    
    return (<SC.FooterStyled>
        <SC.LogoContainer>
            <SC.LogoImage src={logo} alt="logo" />
        </SC.LogoContainer>
        <NavBar navList={<PageNav $position="footer"/>} margin={isMobile ? "40px" : "0"} />
        <NavBar navList={<SocNet theme={theme} $justified="center"/>} />
    </SC.FooterStyled> );
}
 
export default Footer;
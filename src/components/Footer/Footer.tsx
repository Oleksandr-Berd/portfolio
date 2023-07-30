import * as SC from "./FooterStyled"

import logo from "../../assets/images/we_stand_with_ukraine_banner_template_doves_hands_flat_sketch_6922728/We stand with ukraine, dove and hands.jpg"
import NavBar from '../NavBar/NavBar';
import PageNav from "../PageNav/PageNav";
import SocNet from "../SocNet/SocNet";


const Footer: React.FC = (): JSX.Element => {
    return (<SC.FooterStyled>
        <SC.LogoContainer>
            <SC.LogoImage src={logo} alt="logo" />
        </SC.LogoContainer>
        <NavBar navList={<PageNav />} margin={"40px"} />
        <NavBar navList={<SocNet theme="light" $justified="center"/>} />
    </SC.FooterStyled> );
}
 
export default Footer;
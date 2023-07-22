
import * as SC from "./HeroStyled"

import heroMobile from "../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
import {ReactComponent as DownArrowsSvg} from "../../assets/images/icons/down-arrows.svg"

const Hero: React.FC = (): JSX.Element => {
    return (<SC.HeroContainer>
        <SC.HeroPic src={heroMobile} alt="" />
        <SC.Title>Hey, I’m Alex Berdychevskyi and I love programming efficient  and beautiful Apps</SC.Title>
        <SC.ButtonLink href="#aboutMe">
            <SC.IconContainer>
                <DownArrowsSvg/>
            </SC.IconContainer>
            <span>About me</span>
        </SC.ButtonLink>
    </SC.HeroContainer> );
}
 
export default Hero;
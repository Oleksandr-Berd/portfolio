
import * as SC from "./HeroStyled"
import { useMediaQuery } from 'usehooks-ts';

import heroMobile from "../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
import heroTablet from "../../assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
import heroDesktop from "../../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"

import {ReactComponent as DownArrowsSvg} from "../../assets/images/icons/down-arrows.svg"

const Hero: React.FC = (): JSX.Element => {

    const isMobile = useMediaQuery("(max-width:767px)")
    const isTablet = useMediaQuery("(min-with:768px)")

    return (<SC.HeroContainer $heroImage={isTablet ? heroTablet : heroDesktop}>
        {isMobile ? <SC.HeroPic src={heroMobile} alt="hero" /> : null}
        {isMobile ? <><SC.Title>Hey, I’m Alex Berdychevskyi and I love programming efficient  and beautiful Apps</SC.Title>
            <SC.ButtonLink href="#aboutMe">
                <SC.IconContainer>
                    <DownArrowsSvg />
                </SC.IconContainer>
                <SC.ButtonText>About me</SC.ButtonText>
            </SC.ButtonLink></> : <SC.ContentContainer><SC.Title>Hey, I’m Alex Berdychevskyi and I love programming efficient  and beautiful Apps</SC.Title>
            <SC.ButtonLink href="#aboutMe">
                <SC.IconContainer>
                    <DownArrowsSvg />
                </SC.IconContainer>
                <SC.ButtonText>About me</SC.ButtonText>
            </SC.ButtonLink></SC.ContentContainer>}
        
    </SC.HeroContainer> );
}
 
export default Hero;
import * as SC from "./GetInTouchStyled"

import NavBar from "../NavBar/NavBar";
import SocNet from "../SocNet/SocNet";
import SubTitle from "../SubTitle/SubTitle";
import ContentParagraph from "../Content/Content";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { useMediaQuery } from 'usehooks-ts';

const GetInTouch: React.FC = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)

    const isDesktop = useMediaQuery("(min-width:1440px)")

    const titleContent = "Get in Touch";
    const paragraphContent = " I'm enthusiastic about exploring innovative projects and collaborating on a wide range of technologies to create meaningful solutions. As I embark on my career journey, I'm actively seeking opportunities that allow me to leverage my skills in React, Node, and TypeScript to their full potential. My passion for problem-solving and attention to detail drives me to approach every task with dedication and enthusiasm. I'm open to diverse opportunities that challenge me to grow and expand my knowledge. Please feel free to explore my online profiles below, and I'm excited to connect with you and discuss how I can contribute to your vision and make a positive impact on your projects!"

    return (<SC.CommonContainer>
        {isDesktop ?
            <>
                <SubTitle content={titleContent} />
                <SC.DesktopContainer>
                    <ContentParagraph content={paragraphContent} />
                    <NavBar navList={<SocNet theme={theme === "light" ? "dark" : "light"} $justified="start" />} />
                </SC.DesktopContainer>
            </>
            :
            <>

                <SubTitle content={titleContent} />
                
                    <ContentParagraph content={paragraphContent} />
                    <NavBar navList={<SocNet theme={theme === "light" ? "dark" : "light"} $justified="start" />} />
                
            </>
        }

    </SC.CommonContainer>);
}

export default GetInTouch;
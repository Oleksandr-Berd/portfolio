import * as SC from "./AboutMeStyled"

import avatarPic from "../../assets/images/portfolio.jpeg"
import LinkButton from "../LinkButton/LinkButton";
import { useMediaQuery } from 'usehooks-ts';

const pathText = "go to portfolio";
const path = "/portfolio"

const AboutMe: React.FC = (): JSX.Element => {

const isTablet = useMediaQuery("(min-width:768px)")

    return (<SC.CommonContainer >
        <SC.AvatarPic src={avatarPic} alt="avatar" />
        {isTablet ? <SC.ContentContainer id="aboutMe">
            <SC.Title>About Me</SC.Title>
            <SC.AccordionStyled>
                <SC.AccordionItem eventKey="0">
                    <SC.AccordionHeader><p>Hey there, fellow tech enthusiasts!
                        👨‍💻 Imagine a passionate developer who dances effortlessly with the MERN (MongoDB, Express.js, React, Node.js) tech stack. Well, that's me!...</p></SC.AccordionHeader>
                    <SC.TextAccordion>
                        <p>Hey there, fellow tech enthusiasts!</p>
                        <p> 👨‍💻 Imagine a passionate developer who dances effortlessly with the MERN (MongoDB, Express.js, React, Node.js) tech stack. Well, that's me!</p>
                        <p>🚀 With one year of rocket-fueled experience in MERN, I've been unleashing creativity on both the client and server sides. Building captivating web applications is my jam!</p>
                        <p> 💡 Are you ready for innovation? I'm on the lookout for thrilling collaborations with like-minded programmers. Together, we'll harness the power of MERN to create the next big thing!</p>
                        <p> 🤝 Whether it's a startup project or a daring venture, count me in! Join me on this coding journey, and let's forge remarkable solutions that'll leave everyone awestruck.</p>
                        <p> 🔥 Passion, proficiency, and a pinch of pizzazz – that's what I bring to the table. Let's connect and weave lines of code into sheer awesomeness!</p>
                        <p>
                            Ready to take the plunge into the world of MERN magic? Let's code our way to greatness!
                            Go ahead and add your own flair to the text, highlighting your unique skills and personality. Remember, your "About Me" section is your chance to make a memorable impression on potential collaborators, so make it shine! If you have any more requests or need further help, feel free to ask. Happy coding!
                            </p>
                    </SC.TextAccordion>
                </SC.AccordionItem>
            </SC.AccordionStyled>
            <LinkButton path={path} text={pathText} />
        </SC.ContentContainer> : <SC.ContentContainer id="aboutMe">
            <SC.Title>About Me</SC.Title>
            <SC.Text><p>Hey there, fellow tech enthusiasts!</p>
                <p> 👨‍💻 Imagine a passionate developer who dances effortlessly with the MERN (MongoDB, Express.js, React, Node.js) tech stack. Well, that's me!</p>
                <p>🚀 With one year of rocket-fueled experience in MERN, I've been unleashing creativity on both the client and server sides. Building captivating web applications is my jam!</p>
                <p> 💡 Are you ready for innovation? I'm on the lookout for thrilling collaborations with like-minded programmers. Together, we'll harness the power of MERN to create the next big thing!</p>
                <p> 🤝 Whether it's a startup project or a daring venture, count me in! Join me on this coding journey, and let's forge remarkable solutions that'll leave everyone awestruck.</p>
                <p> 🔥 Passion, proficiency, and a pinch of pizzazz – that's what I bring to the table. Let's connect and weave lines of code into sheer awesomeness!</p>
                <p>
                    Ready to take the plunge into the world of MERN magic? Let's code our way to greatness!
                    Go ahead and add your own flair to the text, highlighting your unique skills and personality. Remember, your "About Me" section is your chance to make a memorable impression on potential collaborators, so make it shine! If you have any more requests or need further help, feel free to ask. Happy coding!
                </p></SC.Text>
            <LinkButton path={path} text={pathText} />
        </SC.ContentContainer>}
    </SC.CommonContainer> );
}
 
export default AboutMe;
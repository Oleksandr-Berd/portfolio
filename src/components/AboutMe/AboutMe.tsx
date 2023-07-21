import * as SC from "./AboutMeStyled"

import avatarPic from "../../assets/images/portfolio.jpeg"
import LinkButton from "../LinkButton/LinkButton";

const pathText = "go to portfolio";
const path = "/portfolio"

const AboutMe: React.FC = (): JSX.Element => {
    return (<div >
        <SC.AvatarPic src={avatarPic} alt="avatar" />
        <SC.ContentContainer id="aboutMe">
            <SC.Title>About Me</SC.Title>
            <SC.Text>Hey there, fellow tech enthusiasts!
                👨‍💻 Imagine a passionate developer who dances effortlessly with the MERN (MongoDB, Express.js, React, Node.js) tech stack. Well, that's me!
                🚀 With one year of rocket-fueled experience in MERN, I've been unleashing creativity on both the client and server sides. Building captivating web applications is my jam!
                💡 Are you ready for innovation? I'm on the lookout for thrilling collaborations with like-minded programmers. Together, we'll harness the power of MERN to create the next big thing!
                🤝 Whether it's a startup project or a daring venture, count me in! Join me on this coding journey, and let's forge remarkable solutions that'll leave everyone awestruck.
                🔥 Passion, proficiency, and a pinch of pizzazz – that's what I bring to the table. Let's connect and weave lines of code into sheer awesomeness!
                Ready to take the plunge into the world of MERN magic? Let's code our way to greatness!
                Go ahead and add your own flair to the text, highlighting your unique skills and personality. Remember, your "About Me" section is your chance to make a memorable impression on potential collaborators, so make it shine! If you have any more requests or need further help, feel free to ask. Happy coding!</SC.Text>
            <LinkButton path={path} text={pathText} />
        </SC.ContentContainer>
    </div> );
}
 
export default AboutMe;
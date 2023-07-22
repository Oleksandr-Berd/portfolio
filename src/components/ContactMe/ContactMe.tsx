import LinkButton from "../LinkButton/LinkButton";
import * as SC from "./ContactMeStyled"



const ContactMe: React.FC = (): JSX.Element => {

    const path = "/contact"
    const pathText = "contact me"

    return (<SC.CommonContainer>
        <SC.Title>Interested in doing a project together?</SC.Title>
        <LinkButton path={path} text={pathText} />
    </SC.CommonContainer> );
}
 
export default ContactMe;
import ContactForm from "../../components/ContactForm/ContactForm";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const ContactPage: React.FC = (): JSX.Element => {
    return (<div>
        <GetInTouch />
        <ContactForm />
    </div>);
}

export default ContactPage;
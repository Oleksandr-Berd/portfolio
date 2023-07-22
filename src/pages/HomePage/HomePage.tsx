import AboutMe from "../../components/AboutMe/AboutMe";
import ContactMe from "../../components/ContactMe/ContactMe";
import Hero from "../../components/Hero/Hero";

const HomePage:React.FC = ():JSX.Element => {
    return (<div>
        <Hero />
        <AboutMe />
        <ContactMe/>
    </div> );
}
 
export default HomePage;
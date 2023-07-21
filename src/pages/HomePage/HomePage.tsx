import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/Hero/Hero";

const HomePage:React.FC = ():JSX.Element => {
    return (<div>
        <Hero />
        <AboutMe/>
    </div> );
}
 
export default HomePage;
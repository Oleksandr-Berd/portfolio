import { Dna } from "react-loader-spinner";
import { Project } from "../../utils/interfaces";
import ProjectList from "../../components/ProjectsList/ProjectsList";

interface IProps {
    isLoading: Boolean,
    projects:Project[],
}

const PortfolioPage: React.FC<IProps> = ({isLoading, projects}): JSX.Element => {


   

    return (<div>
        {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        /> : null}
        {projects ? (<ProjectList projects={projects} />) : <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}
    </div> );
}
 
export default PortfolioPage;
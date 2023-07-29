import { Dna } from "react-loader-spinner";
import { Project } from "../../utils/interfaces";
import ProjectList from "../../components/ProjectsList/ProjectsList";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

interface IProps {
    isLoading: Boolean,
    projects: Project[],
    fetchProjects: (difficulty:string)=>void
}

const PortfolioPage: React.FC<IProps> = ({ isLoading, projects, fetchProjects }): JSX.Element => {
    const [difficulty, setDifficulty] = useState<string>("Get All")

    const handleDifficultyChange = (eventKey: string | null):void => {
        
        if (eventKey) {
            setDifficulty(eventKey)
        }
  } 

    useEffect(() => { fetchProjects(difficulty) }, [difficulty])
    
    return (<div>
        {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        /> : null}
        <form>
            <Dropdown onSelect={handleDifficultyChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose the project's difficulty
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item name="Get All" eventKey="Get All">Get All</Dropdown.Item>
                <Dropdown.Item eventKey="junior">Junior</Dropdown.Item>
                <Dropdown.Item eventKey="intermediate">Intermediate</Dropdown.Item>
                <Dropdown.Item eventKey="advanced">Advanced</Dropdown.Item>
                <Dropdown.Item eventKey="guru">Guru</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </form>
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
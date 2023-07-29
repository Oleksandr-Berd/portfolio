import { Dna } from "react-loader-spinner";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

import * as SC from "./PortfolioPageStyled"

import { Project } from "../../utils/interfaces";
import ProjectList from "../../components/ProjectsList/ProjectsList";


interface IProps {
    isLoading: Boolean,
    projects: Project[],
    fetchProjects: (difficulty: string) => void
}

const PortfolioPage: React.FC<IProps> = ({ isLoading, projects, fetchProjects }): JSX.Element => {
    const [difficulty, setDifficulty] = useState<string>("Get All")

    const handleDifficultyChange = (eventKey: string | null): void => {

        if (eventKey) {
            setDifficulty(eventKey)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <SC.DropDownContainer>
            <Dropdown onSelect={handleDifficultyChange}>
                <SC.DropdownToggle variant="success" id="dropdown-basic">
                    Choose the project's difficulty
                </SC.DropdownToggle>
                <SC.DropdownMenu >
                    <SC.DropdownItem name="Get All" eventKey="Get All">Get All</SC.DropdownItem>
                    <SC.DropdownItem eventKey="junior">Junior</SC.DropdownItem>
                    <SC.DropdownItem eventKey="intermediate">Intermediate</SC.DropdownItem>
                    <SC.DropdownItem eventKey="advanced">Advanced</SC.DropdownItem>
                    <SC.DropdownItem eventKey="guru">Guru</SC.DropdownItem>
                </SC.DropdownMenu>
            </Dropdown>
        </SC.DropDownContainer>

        <SC.DropDownContainer>
            <label htmlFor="tech">Search By Technology</label>
            <input type="text" name="tech" placeholder="type interested technology..." />
        </SC.DropDownContainer>

        {projects ? (<ProjectList projects={projects} />) : <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}
    </div>);
}

export default PortfolioPage;
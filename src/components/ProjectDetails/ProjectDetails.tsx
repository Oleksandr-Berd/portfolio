import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";

import * as SC from "./ProjectDetailsStyled"

import { ReactComponent as LeftArrowSvg } from "../../assets/images/icons/arrow-left.svg"
import { ReactComponent as RigthArrowSvg } from "../../assets/images/icons/arrow-right.svg"

import { Project } from "../../utils/interfaces";
import { getProjectDetail } from "../../utils/services";
import ContactMe from '../ContactMe/ContactMe';

interface IProps {
    projects: Project[],
}

const ProjectDetails: React.FC<IProps> = ({ projects }): JSX.Element => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const params = useParams()
    const { title } = params

    const fetchProjects = useRef<Project[] | null>(null)

    const project = fetchProjects.current ? fetchProjects.current[0] : null

    const projectIndex = projects.findIndex(el => el.title === title)


    const prevProject = projects[projectIndex - 1]
    const nextProject = projects[projectIndex + 1]

    console.log(prevProject);


    useEffect(() => {
        const fetchProjectDetails = async () => {
            setIsLoading(true)
            try {
                const result = await getProjectDetail(title!)
                fetchProjects.current = result.data
            } catch (error) {
                console.log(error);

            } finally {
                setIsLoading(false)
            }

        }
        fetchProjectDetails()
    }, [title])

    //     const chooseNextProject = (evt) => {


    // }

    return (<div>
        {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        /> : null}
        {project && <SC.ItemStyled>
            <SC.ImageContainer><SC.Image src={project.coverImage} alt={project.title} /></SC.ImageContainer>
            <SC.DifficultyContainer>
                <SC.Difficulty $level={project.difficulty}>{project.difficulty}</SC.Difficulty>
            </SC.DifficultyContainer>
            <SC.ContentContainer>
                <SC.Title>{project.title}</SC.Title>
                <SC.Text>{project.task}</SC.Text>
                <SC.TechStackList>
                    {project.techStack.map(el => (<SC.TechStackItem key={el.toString()}>{el}</SC.TechStackItem>))}
                </SC.TechStackList>
                <SC.LinkButton to={project.liveUrl} target="_blank" rel="noopener noreferrer">visit website</SC.LinkButton>
            </SC.ContentContainer>
            <SC.BackgroundContainer>
                <SC.SubTitle>Project Background</SC.SubTitle>
                <SC.Text style={{ marginBottom: "40px" }}>{project.summary}</SC.Text>
                <SC.SubTitle>Static Preview</SC.SubTitle>
            </SC.BackgroundContainer>
            <SC.ButtonsContainer>
                <SC.FlexButtonsContainer>
                    <SC.ButtonLeft disabled={!prevProject}>
                        <LeftArrowSvg />
                        <SC.ButtonTitle>{prevProject ? prevProject.title : "This one is the first"}</SC.ButtonTitle>
                        
                    </SC.ButtonLeft>
                    <SC.ButtonText>Previous Project</SC.ButtonText>
                </SC.FlexButtonsContainer>
                <SC.FlexButtonsContainer>
                <SC.ButtonRight disabled={!nextProject}>
                    <RigthArrowSvg />
                    <SC.ButtonTitle>{nextProject ? nextProject.title : "No more projects yet"}</SC.ButtonTitle>
                    
                    </SC.ButtonRight>
                    <SC.ButtonText>Next Project</SC.ButtonText>
                </SC.FlexButtonsContainer>
            </SC.ButtonsContainer>
            <ContactMe />
        </SC.ItemStyled>}
    </div>);
}

export default ProjectDetails;
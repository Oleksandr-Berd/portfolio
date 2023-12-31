import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { useMediaQuery } from 'usehooks-ts';

import * as SC from "./ProjectDetailsStyled"

import { ReactComponent as LeftArrowSvg } from "../../assets/images/icons/arrow-left.svg"
import { ReactComponent as RightArrowSvg } from "../../assets/images/icons/arrow-right.svg"

import { Project } from "../../utils/interfaces";
import { getProjectDetail } from "../../utils/services";
import ContactMe from '../ContactMe/ContactMe';
import Preview from "./Preview";

interface IProps {
    projects: Project[] | null,
}

const ProjectDetails: React.FC<IProps> = ({ projects }): JSX.Element => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [error, setError] = useState<any>(null)
    const params = useParams()
    const { title } = params
    const navigate = useNavigate()

    const isTablet = useMediaQuery("(min-width:768px)")

    const fetchProjects = useRef<Project[] | null>(null)

    const project = fetchProjects.current ? fetchProjects.current[0] : null

    const projectIndex = projects ? projects.findIndex(el => el.title === title) : null;


    const prevProject = projectIndex !== null ? projects[projectIndex - 1] : null
    const nextProject = projectIndex !== null ? projects[projectIndex + 1] : null

    useEffect(() => {
        const fetchProjectDetails = async () => {
            setIsLoading(true)

            const result = await getProjectDetail(title!)

            if (result.data.message) setError(result.data.message)

            fetchProjects.current = result.data
            setIsLoading(false)
        }
        fetchProjectDetails()
    }, [title])

    const chooseNextProject = (evt: React.MouseEvent<HTMLButtonElement>) => {


        navigate(`/${nextProject.title}`)
    }

    const choosePrevProject = (evt: React.MouseEvent<HTMLButtonElement>) => {


        navigate(`/${prevProject.title}`)
    }

    return (<div>
        {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        /> : null}
        {error ? <h1>{error}</h1> : null}
        {project && <SC.ItemStyled>
            <SC.ImageContainer><SC.Image src={project.coverImage} alt={project.title} /></SC.ImageContainer>
            <SC.DifficultyContainer>
                <SC.Difficulty $level={project.difficulty}>{project.difficulty}</SC.Difficulty>
            </SC.DifficultyContainer>
            {isTablet ?
                <>
                    <SC.ContentContainer>
                        <SC.Title>{project.title}</SC.Title>
                        <SC.DesktopContainer>
                            <SC.TechStackList>
                                {project.techStack.map(el => (<SC.TechStackItem key={el.toString()}>{el}</SC.TechStackItem>))}
                            </SC.TechStackList>
                            <SC.LinkButton to={project.liveUrl} target="_blank" rel="noopener noreferrer">visit website</SC.LinkButton>
                        </SC.DesktopContainer>
                    </SC.ContentContainer>
                    <SC.Text>{project.task}</SC.Text>
                    <SC.BackgroundContainer>
                        <SC.SubTitle>Project Background</SC.SubTitle>
                        <SC.Text style={{ marginBottom: "40px" }}>{project.summary}</SC.Text>
                        <SC.SubTitle>Static Preview</SC.SubTitle>
                        <Preview previews={project.preview} />
                    </SC.BackgroundContainer>
                    <SC.ButtonsContainer>
                        <SC.FlexButtonsContainer >
                            <SC.ButtonLeft disabled={!prevProject} onClick={choosePrevProject}>
                                <LeftArrowSvg />
                                <SC.ButtonTitle>{prevProject ? prevProject.title : "This one is the first"}</SC.ButtonTitle>

                            </SC.ButtonLeft>
                            <SC.ButtonText>Previous Project</SC.ButtonText>
                        </SC.FlexButtonsContainer>
                        <SC.FlexButtonsContainer >
                            <SC.ButtonRight disabled={!nextProject} onClick={chooseNextProject}>
                                <RightArrowSvg />
                                <SC.ButtonTitle>{nextProject ? nextProject.title : "No more projects yet"}</SC.ButtonTitle>
                            </SC.ButtonRight>
                            <SC.ButtonText>Next Project</SC.ButtonText>
                        </SC.FlexButtonsContainer>
                    </SC.ButtonsContainer>
                </>
                : <><SC.ContentContainer>
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
                        <Preview previews={project.preview} />
                    </SC.BackgroundContainer>
                    <SC.ButtonsContainer>
                        <SC.FlexButtonsContainer >
                            <SC.ButtonLeft disabled={!prevProject} onClick={choosePrevProject}>
                                <LeftArrowSvg />
                                <SC.ButtonTitle>{prevProject ? prevProject.title : "This one is the first"}</SC.ButtonTitle>

                            </SC.ButtonLeft>
                            <SC.ButtonText>Previous Project</SC.ButtonText>
                        </SC.FlexButtonsContainer>
                        <SC.FlexButtonsContainer >
                            <SC.ButtonRight disabled={!nextProject} onClick={chooseNextProject}>
                                <RightArrowSvg />
                                <SC.ButtonTitle>{nextProject ? nextProject.title : "No more projects yet"}</SC.ButtonTitle>
                            </SC.ButtonRight>
                            <SC.ButtonText>Next Project</SC.ButtonText>
                        </SC.FlexButtonsContainer>
                    </SC.ButtonsContainer></>}
            <ContactMe />
        </SC.ItemStyled>}
    </div>);
}

export default ProjectDetails;
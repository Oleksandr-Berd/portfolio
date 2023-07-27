import * as SC from "./ProjectStyled"

import { Project } from "../../utils/interfaces";

const ProjectItem: React.FC<Partial<Project>> = (args): JSX.Element => {
    
    const { title, task, coverImage } = args


    return (<SC.ItemStyled>
        <SC.ImageContainer><SC.Image src={coverImage} alt={title} /></SC.ImageContainer>
        <SC.ContentContainer>
            <SC.Title>{title}</SC.Title>
            <SC.Text>{task}</SC.Text>
            <SC.LinkButton to={`/${title}`}>view project</SC.LinkButton>
        </SC.ContentContainer>
    </SC.ItemStyled> );
}
 
export default ProjectItem;
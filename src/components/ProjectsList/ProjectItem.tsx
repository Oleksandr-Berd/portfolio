import * as SC from "./ProjectStyled"

import { Project } from "../../utils/interfaces";

const ProjectItem: React.FC<Partial<Project>> = (args): JSX.Element => {
    
    const {_id,  title, task, coverImage } = args

const taskTitle = task!.split(".")[0]


    

    return (<SC.ItemStyled key={_id}>
        <SC.ImageContainer><SC.Image src={coverImage} alt={title} /></SC.ImageContainer>
        <SC.ContentContainer>
            <SC.Title>{title}</SC.Title>
            <SC.AccordionStyled>
                <SC.AccordionItem eventKey="0">
                    <SC.AccordionHeader>{taskTitle}...</SC.AccordionHeader>
                    <SC.Text>
                        {task}
                    </SC.Text>
                </SC.AccordionItem>
            </SC.AccordionStyled>
            <SC.LinkButton to={`/${title}`}>view project</SC.LinkButton>
        </SC.ContentContainer>
    </SC.ItemStyled> );
}
 
export default ProjectItem;
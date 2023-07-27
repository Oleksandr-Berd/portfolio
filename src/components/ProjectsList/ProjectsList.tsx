import { Project } from "../../utils/interfaces";
import ContactMe from "../ContactMe/ContactMe";
import ProjectItem from "./ProjectItem";

interface IProps {
    projects: Project[],
}

const ProjectList: React.FC<IProps> = ({projects}):JSX.Element => {
    
    
    
    return (<ul>
        {projects.map(({ _id, title, task, liveUrl, coverImage }) => (
            <ProjectItem key={_id} title={title} task={task} liveUrl={liveUrl} coverImage={coverImage} />
        ))}
        <ContactMe />
    </ul>);
}
 
export default ProjectList;
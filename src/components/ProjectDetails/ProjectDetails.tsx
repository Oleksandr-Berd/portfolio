import { useEffect, useRef, useState } from "react";
import { Project } from "../../utils/interfaces";
import { getProjectDetail } from "../../utils/services";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const params = useParams()
const {title} = params

    const fetchProjects = useRef<Project[]>([])

    

    

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


    return ( <div>ProjectDetails</div> );
}
 
export default ProjectDetails;
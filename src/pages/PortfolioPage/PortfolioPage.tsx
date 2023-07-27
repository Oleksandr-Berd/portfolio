import { useEffect, useRef, useState } from "react";
import { getAll } from "../../utils/services";
import { Dna } from "react-loader-spinner";
import { Project } from "../../utils/interfaces";
import ProjectList from "../../components/ProjectsList/ProjectsList";

const PortfolioPage: React.FC = (): JSX.Element => {
const [isLoading, setIsLoading] = useState<Boolean>(false)

    const fetchProjects = useRef<Project[]>([])

    const getAllMovies = async () => {
        setIsLoading(true)
        try {
            const result = await getAll()
            fetchProjects.current = result.data
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getAllMovies() 
},[])

    const projects = fetchProjects.current

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
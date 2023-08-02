import { Dna } from "react-loader-spinner";
import { Dropdown } from "react-bootstrap";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import * as SC from "./PortfolioPageStyled"

import { IFetchProjects, Project } from "../../utils/interfaces";
import ProjectItem from "../../components/ProjectsList/ProjectItem";
import ContactMe from "../../components/ContactMe/ContactMe";
import { useMediaQuery } from 'usehooks-ts';


interface IProps {
    isLoading: Boolean,
    projects: Project[],
    totalPages: number,
    fetchProjects: (args:IFetchProjects) => void
}

const PortfolioPage: React.FC<IProps> = ({ isLoading, projects, fetchProjects, totalPages}): JSX.Element => {
    const [difficulty, setDifficulty] = useState<string>("Get All")
    const [tech, setTech] = useState<string>("")
    const [currentPage, setCurrentPage] = useState<number>(1)
    const observer = useRef(null);
    const lastItemRef = useRef(null);


    const isTablet = useMediaQuery("(min-width:768px")
    const isDesktop = useMediaQuery("(min-width:1440px")


    const handleDifficultyChange = (eventKey: string | null): void => {

        if (eventKey) {
            setDifficulty(eventKey)
            setCurrentPage(1)
        }
        setTech("")
    }

    const handleTechChange = (evt: ChangeEvent<HTMLInputElement>):void => {
        if (evt.target.value.length >= 2) {
            setTimeout(() => {
                const searchedTech = evt.target.value.trim().toLowerCase()
                setTech(searchedTech)
                setCurrentPage(1)
            }, 1000)  
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (tech) {
            setDifficulty("Get All")
        }
        
        fetchProjects({ difficulty, tech, currentPage })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [difficulty, tech, currentPage])

    useEffect(() => {
        const handleObserver = async (entries): Promise<void> => {
            const target = entries[0];
            if (target.isIntersecting && currentPage < totalPages) {
                if (!isLoading) {
                    setCurrentPage((prevPage) => prevPage + 1);
                }
            }
        };
        observer.current = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [currentPage, totalPages, isLoading]);    

    return (<div>
        {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        /> : null}
        {isTablet ? <SC.FilterContainer><SC.DropDownContainer>
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
            <SC.OrTitle>or</SC.OrTitle>
            <SC.DropDownContainer style={{ marginBottom: !isTablet && "32px" }}>
                <SC.FilterInputContainer>
                    <SC.FilterLabel htmlFor="tech">Search By Technology</SC.FilterLabel>
                    <SC.SearchIcon size={isDesktop && 24 } />
                    <SC.SearchFilterInput type="text" name="tech" id="tech" placeholder="type interested technology..." onChange={handleTechChange} />
                </SC.FilterInputContainer>
            </SC.DropDownContainer></SC.FilterContainer> :
            
           
            <>
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
                <SC.OrTitle>or</SC.OrTitle>
                <SC.DropDownContainer style={{ marginBottom: "32px" }}>
                    <SC.FilterInputContainer>
                        <SC.FilterLabel htmlFor="tech">Search By Technology</SC.FilterLabel>
                        <SC.SearchIcon />
                        <SC.SearchFilterInput type="text" name="tech" id="tech" placeholder="type interested technology..." onChange={handleTechChange} />
                    </SC.FilterInputContainer>
                </SC.DropDownContainer>
        </>}

        
        <ul>
            {projects ? projects.map(({ _id, title, task, liveUrl, coverImage }, index, array) => (<SC.ItemStyled key={_id}>
                {/* wrapped in div for pagination purposes*/}
                <ProjectItem title={title} task={task} liveUrl={liveUrl} coverImage={coverImage} index={index} />
                {index === array.length - 1 && <div key={title} ref={lastItemRef} />}

            </SC.ItemStyled>
                
            )) : <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />}     
        </ul>
<ContactMe/>
       
    </div>);
}

export default PortfolioPage;
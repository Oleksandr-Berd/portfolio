import React, { lazy, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Project, IFetchProjects } from './utils/interfaces';
import { addProject, getAll, updateCover } from './utils/services';
import { useAuth } from './hooks';


const ProjectDetails = lazy(() => import('./components/ProjectDetails/ProjectDetails'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage/PortfolioPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const AddImages = lazy(() => import('./pages/Admin/AddImages'))
const AddProject = lazy(() => import('./pages/Admin/AddProject'))
const AdminPage = lazy(() => import('./pages/Admin/AdminPage'))

const App: React.FC = (): JSX.Element => {
  const[isLoading, setIsLoading] = useState<Boolean>(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const projectBase = useRef(null)
  const [error, setError] = useState<any>(null)

  const { token } = useAuth()

  const dispatch = useDispatch()

  const getAllProjects = async (args: IFetchProjects) => {
    const { difficulty, tech, currentPage } = args;

    setIsLoading(true)
    try {
      const result = await getAll({ difficulty, tech, currentPage, limit:3 })
      
      if (currentPage === 1) {
        setProjects(result.data.result)
      } else {
        setProjects(prev => [...prev, ...result.data.result])
      }
     
      setTotalPages(result.data.totalPages)
    } catch (error) {
     setError(error)

    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    const getBaseProjects = async () => {
      try {
        const result = await getAll({ difficulty: "Get All", tech: "", currentPage: 1, limit: 10 })

        projectBase.current = result.data.result
      } catch (error) {
        setError(error)

      } finally {
        setIsLoading(false)
      }

    }

    getBaseProjects()
  }, [])

  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const submitProjects = (data: Project): void => {

    addProject(data, token)

  }

  const submitCoverImage = (coverImage: object | null, title: string) => {
    updateCover(coverImage = {}, title, token)

  }

  return (
    <div className="App">
      {error ? <h1>{error}</h1>  : <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage isLoading={isLoading} projects={projects} fetchProjects={getAllProjects} totalPages={totalPages} />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path='admin/project' element={<AddProject submit={submitProjects} />}>
            <Route path='images' element={<AddImages submit={submitCoverImage} />} />
          </Route>
          <Route path='/:title' element={<ProjectDetails projects={projectBase.current} />} />
        </Route>

      </Routes>}
      
    </div>
  );
}

export default App;

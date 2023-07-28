import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdminPage from './pages/Admin/AdminPage';
import AddProject from './pages/Admin/AddProject';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Project } from './utils/interfaces';
import { addProject, getAll, updateCover } from './utils/services';
import { useAuth } from './hooks';
import AddImages from './pages/Admin/AddImages';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

const App: React.FC = (): JSX.Element => {
  const[isLoading, setIsLoading] = useState<Boolean>(false)
  const fetchProjects = useRef<Project[]>([])

  const { token } = useAuth()

  const dispatch = useDispatch()

  const getAllProjects = async () => {
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
    getAllProjects()
  }, [])

  const projects = fetchProjects.current

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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage isLoading={isLoading} projects={projects} />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path='admin/project' element={<AddProject submit={submitProjects} />}>
            <Route path='images' element={<AddImages submit={submitCoverImage} /> } />
          </Route>
          <Route path='/:title' element={<ProjectDetails projects={projects} /> } />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdminPage from './pages/Admin/AdminPage';
import AddProject from './pages/Admin/AddProject';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Project, IFetchProjects } from './utils/interfaces';
import { addProject, getAll, updateCover } from './utils/services';
import { useAuth } from './hooks';
import AddImages from './pages/Admin/AddImages';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

const App: React.FC = (): JSX.Element => {
  const[isLoading, setIsLoading] = useState<Boolean>(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)

  const { token } = useAuth()

  const dispatch = useDispatch()

  const getAllProjects = async (args: IFetchProjects) => {
    const { difficulty, tech, currentPage } = args;

    setIsLoading(true)
    try {
      const result = await getAll({difficulty, tech, currentPage})
      setProjects(prev => [...prev, ...result.data.result])
      setTotalPages(result.data.totalPages)
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false)
    }

  }


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
          <Route path="portfolio" element={<PortfolioPage isLoading={isLoading} projects={projects} fetchProjects={getAllProjects} totalPages={totalPages} />} />
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

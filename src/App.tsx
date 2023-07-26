import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdminPage from './pages/Admin/AdminPage';
import AddProject from './pages/Admin/AddProject';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path='admin/project' element={<AddProject />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;

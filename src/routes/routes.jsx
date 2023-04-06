import { Route, Routes } from 'react-router-dom';
import Playbar from '../components/Playbar';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomePage from '../pages/HomePage';
import Forgotpassword from '../pages/forgotpassword';
import LoginPage from '../pages/login';
import ProtectedPage from './protectedpage';

const routes = [
  <Route
    path="/"
    element={
      <ProtectedPage guestOnly={false} needLogin={true}>
        <HomePage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/sidebar"
    element={
      <ProtectedPage>
        <Sidebar />
      </ProtectedPage>
    }
  />,
  <Route
    path="/navbar"
    element={
      <ProtectedPage>
        <Navbar />
      </ProtectedPage>
    }
  />,
  <Route
    path="/playbar"
    element={
      <ProtectedPage>
        <Playbar />
      </ProtectedPage>
    }
  />,
  <Route
    path="/forgotpassword"
    element={
      <ProtectedPage>
        <Forgotpassword />
      </ProtectedPage>
    }
  />,
  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true} needLogin={false}>
        <LoginPage />
      </ProtectedPage>
    }
  />,
];
export default routes;

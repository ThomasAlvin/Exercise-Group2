import React, { useEffect, useState } from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Forgotpassword from './pages/forgotpassword';
import Playbar from './components/Playbar';
import LoginPage from './pages/login';
import routes from './routes/routes';

function App() {
  // const [loding, setLoading] = useState(true);
  // useEffect(() =>
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000)
  // );
  return (
    <>
      <Routes>
        {routes.map(val => val)}
        {/* <Route path="/" element={<HomePage />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/playbar" element={<Playbar />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/login" element={<LoginPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;

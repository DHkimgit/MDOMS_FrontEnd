import './App.css';
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './pages/login';
import MainPage from './pages/mainpage';
import LoginForm2 from './pages/login2';
import Register from './pages/Register';
import GridTest from './pages/gridtest';
import MyComponent from './pages/gridtest2';
import GridTestPage from './pages/test_gridpage';

// https://intrepidgeeks.com/tutorial/global-state-management-challenge-user-information-login-information-feat-recoil
// https://velog.io/@newsilver1028/React-study-4%EC%A3%BC%EC%B0%A8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%8C%93%EA%B8%80-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-recoil-etc
function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="register" element={<Register />} />
          <Route path="auth" element={<LoginForm />}/>
          <Route path="auth2" element={<LoginForm2 />}/>
          <Route path="main" element={<MainPage />}/>
          <Route path='grid' element={<GridTest />}/>
          <Route path='grid2' element={<MyComponent />}/>
          <Route path='grid3' element={<GridTestPage />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;

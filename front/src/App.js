import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/login';
// https://intrepidgeeks.com/tutorial/global-state-management-challenge-user-information-login-information-feat-recoil
// https://velog.io/@newsilver1028/React-study-4%EC%A3%BC%EC%B0%A8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%8C%93%EA%B8%80-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-recoil-etc
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="auth" element={<LoginForm />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;

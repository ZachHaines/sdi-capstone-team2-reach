import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SelfReflectionPage from './components/SelfReflectionPage/SelfReflectionPage';
import DashboardContent from './components/Dashboard/Dashboard'
import AdminPage from './components/AdminPage/AdminPage';
import ReachOutPage from './components/ReachOutPage/ReachOutPage'
import ResourcePage from './components/ResourcePage/ResourcesPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MemberList from './components/ReachOutPage/MemberList';
import MHPPage from './components/MHPPage/MHPPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={< App/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/self-reflection' element={<DashboardContent DisplayItem={SelfReflectionPage}/>} />
        <Route path='/reachout' element={<DashboardContent DisplayItem={MemberList}/>} />
        <Route path='/reachout/:memberID' element={<DashboardContent DisplayItem={ReachOutPage}/>} />
        <Route path='/admin' element={<DashboardContent DisplayItem={AdminPage}/>} />
        <Route path='/resource' element={<DashboardContent DisplayItem={ResourcePage}/>} />
        <Route path='/profile' element={<DashboardContent DisplayItem={ProfilePage}/>} />
        <Route path='/mhp' element={<DashboardContent DisplayItem={MHPPage}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

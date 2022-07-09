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
import { AppProvider } from './AppContext';
import ErrorPage from './components/ErrorPage/ErrorPage';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< App/>} />
          <Route path='/error' element={<ErrorPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/self-reflection' element={<DashboardContent DisplayItem={SelfReflectionPage} DisplayTitle='Self Reflection'/>} />
          <Route path='/reachout' element={<DashboardContent DisplayItem={MemberList} DisplayTitle='Reach Out'/>} />
          <Route path='/reachout/:memberID' element={<DashboardContent DisplayItem={ReachOutPage} DisplayTitle='Reach Out'/>} />
          <Route path='/admin' element={<DashboardContent DisplayItem={AdminPage} DisplayTitle='Admin'/>} />
          <Route path='/resource' element={<DashboardContent DisplayItem={ResourcePage} DisplayTitle='Resources'/>} />
          <Route path='/profile' element={<DashboardContent DisplayItem={ProfilePage} DisplayTitle='Profile'/>} />
          <Route path='/mhp' element={<DashboardContent DisplayItem={MHPPage} DisplayTitle='MHP Dashboard'/>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

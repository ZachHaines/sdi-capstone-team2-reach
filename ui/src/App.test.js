import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { AppProvider } from './AppContext';
import App from './App'; // COMPLETE
import AdminPage from './components/AdminPage/AdminPage'; // COMPLETE
import ErrorPage from './components/ErrorPage/ErrorPage'; // COMPLETE
import LoginPage from './components/LoginPage/LoginPage' // COMPLETE
import MemberMessagesPage from './components/MemberMessagesPage/MemberMessagesPage'; // COMPLETE
import MHPPage from './components/MHPPage/MHPPage'; // COMPLETE
import ProfilePage from './components/ProfilePage/ProfilePage'; // COMPLETE
import ResourcePage from './components/ResourcePage/ResourcesPage'; // COMPLETE
import SelfReflectionPage from './components/SelfReflectionPage/SelfReflectionPage' // COMPLETE
import SignUpPage from './components/SignUpPage/SignUpPage' // COMPLETE

// ABOUT PAGE - COMPLETE
describe('About Page', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
    );
  it('renders learn react link', () => {
    setup()
    const testedElement = screen.getByText(/Together, We Are Stronger/);
    expect(testedElement).toBeInTheDocument();
  });
})

// LOGIN - COMPLETE
describe('Login Page', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Login Page', () => {
    setup()
    const testedElement = screen.getByText(/If you do not have an account, please create an account/);
    expect(testedElement).toBeInTheDocument();
  });
});

// SIGN UP - COMPLETE
describe('Sign Up', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Sign Up Page', () => {
    setup()
    const testedElement = screen.getByText(/If you already have an account/);
    expect(testedElement).toBeInTheDocument();
  });
});

// SELF REFLECTION - COMPLETE
describe('Self Reflection', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <SelfReflectionPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Self Reflection Page', () => {
    setup()
    const testedElement = screen.getByText(/Self Reflection/);
    expect(testedElement).toBeInTheDocument();
  });
});

// MESSAGE PROVIDER - COMPLETE
describe('Message Provider', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <MemberMessagesPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Message Provider Page', () => {
    setup()
    const testedElement = screen.getByText(/Messages With Mental Health Provider/);
    expect(testedElement).toBeInTheDocument();
  });
});

// ADMIN - COMPLETE
describe('Admin', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <AdminPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Admin Page', () => {
    setup()
    const testedElement = screen.getByText(/Users/);
    expect(testedElement).toBeInTheDocument();
  });
});

// MHP - COMPLETE
describe('MHP', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <MHPPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('MHP', () => {
    setup()
    const testedElement = screen.getByText(/Mental Health Provider/);
    expect(testedElement).toBeInTheDocument();
  });
});

// RESOURCES - COMPLETE
describe('Resources', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <ResourcePage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Resources Page', () => {
    setup()
    const testedElement = screen.getByText(/Resources/);
    expect(testedElement).toBeInTheDocument();
  });
});

// PROFILE
describe('Profile', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Profile Page', () => {
    setup()
    const testedElement = screen.getByText(/Profile Settings/);
    expect(testedElement).toBeInTheDocument();
  });
});
/* ------------------------------ */
// ERROR PAGE
describe('Error Page', ()=> {
  const setup = () => render(
    <AppProvider>
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    </AppProvider>
    );
    
  it('renders Error Page', () => {
    setup()
    const testedElement = screen.getByText(/This is not the page you are looking for/);
    expect(testedElement).toBeInTheDocument();
  });
});
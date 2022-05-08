// import logo from './logo.svg';
// import './App.css';
import { Fade } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AddNote from './AddNote';
import { AuthContext, AuthProvider } from './context/Auth.context';
import EditNote from './EditNote';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Nav from './Nav';
import Notes from './Notes';
import Private from './Private';
import Profile from './Profile';
import Register from './Register';
import ResetPassword from './ResetPassword';

const AuthRequired = ({children}) => {
  const location = useLocation();
  console.log(location)
  const {currentUser, loading} = React.useContext(AuthContext);
  if(loading) {
    if(currentUser) {
      return children;
    }else {
      return <Navigate to="/login" state={{from: location.pathname}} />
      // return <div>You are not authorized to view this page</div>
    }
  } else {
    return <div>Loading...</div>
  }
}


function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: "top", horizontal: "right"}} TransitionComponent={Fade}  >
        <AuthProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/register" element={<Register />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/add" element={<AuthRequired> <AddNote /> </AuthRequired>} />
              <Route path="/notes/edit/:noteId" element={<AuthRequired><EditNote /></AuthRequired>} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgetpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/profile" element={<AuthRequired> <Profile /> </AuthRequired>} />
              <Route path="/private" element={<AuthRequired> <Private /> </AuthRequired>} />
              
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;

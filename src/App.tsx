import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import LoginScreen from './pages/Login/Login';

function App() {
  return (
    <div className='w-full h-screen'>
       <Routes>
          <Route path='/' element={<ProtectedRoute element={<HomePage />}/>}/>
          <Route path='/login' element={<LoginScreen />}/>
       </Routes>
    </div>
  );
}

export default App;

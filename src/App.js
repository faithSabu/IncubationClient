import './App.css';
import AdminLogin from './Components/Admin/AdminLogin'
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import LoginPage from './Components/Login/LoginPage';
import SignupPage from './Components/Signup/SignupPage';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/Home/HomePage';

// testing
import Testing from './Components/Test/Testing';
// testing

function App() {
  return (
    <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/applicationForm' element={<ApplicationForm/>}/>
    {/* <ApplicationForm/> */}

     
    </Routes>
  );
}

export default App;

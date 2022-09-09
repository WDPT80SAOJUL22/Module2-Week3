import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { NavBar } from './components/NavBar';
import ErrorPage from './pages/ErrorPage';
import { useState } from 'react';
import ProjectPage from './pages/ProjectPage';
import QueryStringExample from './pages/QueryStringExample';

const App = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className="App">
      {/* {useLocation().pathname !== '/' && <NavBar/>} */}
      <NavBar/>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Logged In {isLoggedIn? 'true' : 'false'}</button>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path= '/projects' element={<Projects isLoggedIn={isLoggedIn}/>}/>
        <Route path = '/project/:projectId' element={<ProjectPage/>}/>
        <Route path="/example" element={ <QueryStringExample /> } />

        <Route path= '*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

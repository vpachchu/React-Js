import './App.css';
import './assests/css/styles.css';
import React from 'react'
import NewPage from './pages/NewPage'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import MyNavbar from './components/Navbar';



function App() {
  return (
    <div className="App">
<MyNavbar/>

        {/* <BrowserRouter>
          <Routes>

          <Route path='/' exact element={<NewPage/>} />
          <Route path='/about'  element={<AboutPage/>} />


          </Routes>
        </BrowserRouter> */}
    
    </div>
  );
}

export default App;

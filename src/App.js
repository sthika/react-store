import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main';
import Catalog from './pages/Catalog';



const App = () => {
  return (
    <div className="app">
      <Router> 
        <Header/>
        <Routes> 
            <Route path="/" element={<Main />}/> 
            <Route path="/catalog" element={<Catalog />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

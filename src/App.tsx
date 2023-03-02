import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Formulario from './components/formulario';
import Navbar from './components/navbar';
import Page2 from './components/page2';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/' element={<Formulario/>}/>
         <Route path='/login' element={<Formulario/>}/>
         <Route path='/page2' element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;

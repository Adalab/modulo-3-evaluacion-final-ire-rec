//Ejecutar en la terminal npm run githubpage//

// import '../styles/App.scss';
// import images from '../images/logo.jpg';
// import { useState, useEffect } from 'react';
import callToApi from '../services/api';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {



  return (
    <div>
      <nav>
        <li> <Link to=""></Link></li>
      </nav>
      <h2>Este título aparece siempre</h2>
      <Routes>
        <Route path='/contacto' element={

          <h2>
            Este título solo aparece cuando la usuaria entra en la página de
            contacto
          </h2>
        } />

      </Routes>
      <nav>
        <ul>
          <li>
            <a href='/#/'>Ir al inicio</a>
          </li>
          <li>
            <a href='/#/contacto'>Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div >
  );
};

export default App;
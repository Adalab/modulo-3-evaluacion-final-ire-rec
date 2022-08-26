//Ejecutar en la terminal npm run githubpage//
// import { Routes, Route, Link } from 'react-router-dom';
// import '../styles/App.scss';
// import images from '../images/logo.jpg';
import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import api from '../services/api';

function App() {

    //------------------------------USE STATE----------------------------//

    // const [charactersList, setCharactersList] = useState([]);



    //----------------------------------FETCH----------------------------//
    useEffect(() => {
        getDataApi().then((characters) => {
            console.log(characters);
        })
    }, []);

    return (
        <div className="App">
            <h1>Harry Potter</h1>
            <form>
                <label>Busca por personaje</label>
                <input
                    type="text">
                </input>

                <label>Busca por personaje</label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </form>
            <ul>

            </ul>
        </div>
    )
}

//--------------------------------RENDER---------------------------------//
// const htmlList = () => {
//     <li key="characterList">{characters.name} {characters.image} {characters.species} </li>
// }
export default App;
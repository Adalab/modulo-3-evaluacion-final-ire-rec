//Ejecutar en la terminal npm run githubpage//
// import { Routes, Route, Link } from 'react-router-dom';
import '../styles/App.scss';

import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import AllCharacters from './AllCharacters';
import Filters from './Filters';



function App() {

    //-> USE STATE FUNCTIONS
    //este es para mi array general
    const [charactersList, setCharactersList] = useState([]);
    //este para mi array de casas
    const [filterHouses, setFilterHouses] = useState([]);


    //->HANDLE FUNCTIONS
    const handleFilterHouses = (value) => {

        setFilterHouses([...filterHouses, value]);

    }

    //-> FETCH
    useEffect(() => {
        getDataApi().then((characters) => {
            setCharactersList(characters);
        })
    }, []);

    //-> FILTER FUNCTIONS
    //characterList es mi array, y ahora voy a guardar en un array todas las casas

    const getHouses = () => {
        if ((charactersList.house) !== ('')) {
            console.log('falta casa')
        }
        const charactersHouses = charactersList.map(charactersList => charactersList.house);


        // const oneHouse = charactersHouses
        //     .filter((house, index) => {
        //         return charactersHouses.indexOf(house) === index;
        //     });
        // oneHouse.splice(4);


        console.log(charactersHouses)
        return charactersHouses;


    }
    getHouses();

    //charactersHouses es mi array de casas, pero para que no se repitan voy a hacer un filter


    return (
        <div className="App">
            <header className="header">

            </header>
            <main className='main'>
                {/* paso getHouses con paréntesis porque quiero pasar el resultado */}
                <Filters houses={getHouses()} handleFilterHouses={handleFilterHouses} ></Filters>
                <AllCharacters charactersList={charactersList} ></AllCharacters>
            </main>
        </div>
    )
}

// App está pasando dos arrays
export default App;
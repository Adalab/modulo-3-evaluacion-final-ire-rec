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
    console.log(charactersList);
    //este para mi array de casas
    const [filterHouses, setFilterHouses] = useState([]);
    //para input búsqueda
    const [searchCharacter, setSearchCharacter] = useState('');


    //->HANDLE FUNCTIONS
    const handleFilterHouses = (value) => {
        setFilterHouses([...filterHouses, value]);
    }

    const handleSearch = (ev) => {
        setSearchCharacter(ev.currentTarget.value);
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
        const charactersHouses = charactersList.map(charactersList => charactersList.house);

        //hace que no se me añada el mismo nombre al hacer click
        const oneHouse = charactersHouses
            .filter((house, index) => {
                return charactersHouses.indexOf(house) === index;
            });
        //array sin casas vacías
        const deleteEmptyHouse = charactersHouses.filter(house => house !== '');

        //array sin casas repetidas
        const cleanHouses = deleteEmptyHouse.filter((house, index) => deleteEmptyHouse.indexOf(house) === index)
        return cleanHouses;
    }
    getHouses();

    //OTHER FUNCTIONS
    const newImage = () => {
        const allImages = charactersList.map(charactersList => {
            if (charactersList.image === '') {
                charactersList.image = "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
            }

        }); return allImages
    }


    newImage();


    return (
        <div className="App">
            <header className="header">

            </header>
            <main className='main'>
                {/* paso getHouses con paréntesis porque quiero pasar el resultado */}
                <Filters houses={getHouses()} handleFilterHouses={handleFilterHouses} searchCharacter={searchCharacter} handleSearch={handleSearch}></Filters>
                <AllCharacters charactersList={charactersList} ></AllCharacters>
            </main>
        </div>
    )
}

// App está pasando dos arrays
export default App;
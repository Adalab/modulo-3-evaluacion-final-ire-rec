//Ejecutar en la terminal npm run githubpage//
import { Routes, Route, Link, useLocation, matchPath } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import AllCharacters from './AllCharacters';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';




function App() {


    //-> USE STATE FUNCTIONS

    const [charactersList, setCharactersList] = useState([]);
    console.log(charactersList);

    const [filterHouses, setFilterHouses] = useState([]);

    const [searchCharacter, setSearchCharacter] = useState('');


    //->HANDLE FUNCTIONS
    const handleFilterHouses = (value) => {
        setFilterHouses([...filterHouses, value]);
    }

    const handleSearchCharacter = (ev) => {
        setSearchCharacter(ev.currentTarget.value, ev.currentTarget.id);

    }

    //-> FETCH
    useEffect(() => {
        getDataApi().then((characters) => {
            setCharactersList(characters);
        })
    }, []);

    //-> FILTER FUNCTIONS

    const getNames = () => {
        const charactersNames = charactersList
            .filter((nameChar) => {
                return nameChar.name.toLowerCase().includes(searchCharacter.toLowerCase());
            })
            .map(charactersList => charactersList.name)
        console.log(charactersNames);
    }
    getNames();


    const getHouses = () => {
        const charactersHouses = charactersList.map(charactersList => charactersList.house);

        //hace que no se me añada el mismo nombre al hacer click
        const oneHouse = charactersHouses
            .filter((house, index) => {
                return charactersHouses.indexOf(house) === index;
            });
        //sin casas vacías
        const deleteEmptyHouse = charactersHouses.filter(house => house !== '');

        //sin casas repetidas
        const cleanHouses = deleteEmptyHouse.filter((house, index) => deleteEmptyHouse.indexOf(house) === index)
        return cleanHouses;
    }
    getHouses();


    //OTHER FUNCTIONS
    const newImage = () => {
        const allImages = charactersList.map(charactersList => {
            if (charactersList.image === '') {
                charactersList.image = "https://www.nawpic.com/media/2020/harry-potter-background-nawpic-1.jpg"
            }

        }); return allImages
    }

    newImage();

    //ROUTES 

    const { pathname } = useLocation();
    console.log(pathname);
    const dataPath = matchPath("/user/:userId", pathname)
    //compruebo si la ruta que se está ejecutando coincide con la ruta declarada//
    const userId = dataPath !== null ? dataPath.params.userId : null;
    //con eso guardo el identificador en una variable//
    const userFound = charactersList.find(user => { return user.id === userId });



    return (
        <div className="App">
            <header className="header">
            </header>
            <main className='main'>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Filters
                                    houses={getHouses()}
                                    handleFilterHouses={handleFilterHouses}
                                    filterHouses={filterHouses}

                                    getNames={getNames()}
                                    searchCharacter={searchCharacter}
                                    handleSearchCharacter={handleSearchCharacter}
                                >

                                </Filters>
                                <AllCharacters charactersList={charactersList} ></AllCharacters>
                            </>
                        }
                    />
                    <Route
                        path="/user/:userId"
                        element={
                            <CharacterDetail user={userFound} />

                        }>

                    </Route>
                </Routes>

            </main>
        </div>
    )
}


export default App;
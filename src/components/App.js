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
    const [filterHouses, setFilterHouses] = useState("all");
    const [searchCharacter, setSearchCharacter] = useState('');


    //-> HANDLE FUNCTIONS
    const handleFilterHouses = (value) => {
        setFilterHouses(value);
    }

    const handleFilterCharacter = (value) => {
        setSearchCharacter(value);
    }

    //-> FETCH
    useEffect(() => {
        getDataApi().then((characters) => {
            setCharactersList(characters);
        })
    }, []);

    //-> FILTER FUNCTIONS

    const houseFilters = charactersList
        .filter((hou) => {
            if (filterHouses === "all") {
                return true;
            } else {
                return hou.house === filterHouses;
            }
        }
        )

        .filter((nameChar) => {
            return nameChar.name.toLowerCase().includes(searchCharacter.toLowerCase());
        })
        .map(charactersList => charactersList)



    //-> REPLACE IMAGE
    const newImage = () => {
        const replaceImages = charactersList.map(charactersList => {
            if (charactersList.image === '') {
                charactersList.image = "https://www.nawpic.com/media/2020/harry-potter-background-nawpic-1.jpg"
            }
        }); return replaceImages
    }
    newImage();

    //-> ROUTES 

    const { pathname } = useLocation();
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
                                    handleFilterHouses={handleFilterHouses}
                                    filterHouses={filterHouses}

                                    searchCharacter={searchCharacter}
                                    handleFilterCharacter={handleFilterCharacter}
                                >

                                </Filters>
                                <AllCharacters
                                    charactersList={houseFilters}

                                ></AllCharacters>
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
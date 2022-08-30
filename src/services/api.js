import { v4 as uuidv4 } from 'uuid';
const getDataApi = () => {


    return fetch('http://hp-api.herokuapp.com/api/characters')
        .then((response) => response.json())
        .then((data) => {
            const characters = data.map(({ name, alternate_names, species, image, house, gender, alive, id }) => ({
                name: name,
                alternate_names: alternate_names,
                species: species,
                image: image,
                house: house,
                gender: gender,
                alive: alive,
                id: uuidv4(),


            }));

            return (characters);



        }
        )


}


export default getDataApi;
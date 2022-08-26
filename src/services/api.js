const getDataApi = () => {
    return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
        .then((response) => response.json())
        .then((data) => {
            const characters = data.map(({ name, alternate_names, species, image, house, gender, alive }) => ({
                name: name,
                alternate_names: alternate_names,
                species: species,
                image: image,
                house: house,
                gender: gender,
                alive: alive,
            }));

            return (characters);
        })
}
export default getDataApi;
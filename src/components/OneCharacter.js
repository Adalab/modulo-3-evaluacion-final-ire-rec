function OneCharacter(props) {

    return (
        <li className="li_charactersList">
            <img src={props.charactersList.image} alt="image_charactersList"></img>
            <p className="name_charactersList">{`Nombre: ${props.charactersList.name}`}</p><p className="species_charactersList">{`Especie: ${props.charactersList.species}`}</p>  </li>
    )

}
export default OneCharacter;
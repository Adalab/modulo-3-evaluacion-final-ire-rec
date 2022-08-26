function HtmlList(props) {

    const renderCharactersList = props.charactersList.map((charactersList) => {

        return (
            <li className="li_charactersList">
                <img src={charactersList.image} alt="image_charactersList"></img>
                <p className="name_charactersList">{charactersList.name}</p><p className="species_charactersList">{charactersList.species}</p>  </li>
        );

    });

    return (
        <ul className="html_list">{renderCharactersList}
        </ul>
    )
}

export default HtmlList;

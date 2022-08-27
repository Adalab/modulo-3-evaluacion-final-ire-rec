import OneCharacter from "./OneCharacter";

function HtmlList(props) {

    const renderCharactersList = props.charactersList.map((charactersList) => {

        return (
            <OneCharacter charactersList={charactersList}></OneCharacter>
        );

    });

    return (
        <ul className="html_list">{renderCharactersList}
        </ul>
    )
}

export default HtmlList;

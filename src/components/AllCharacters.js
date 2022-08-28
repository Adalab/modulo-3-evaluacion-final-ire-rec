import OneCharacter from "./OneCharacter";

function AllCharacters(props) {


    const renderCharactersList = props.charactersList.map((charactersList) => {

        return (
            <OneCharacter charactersList={charactersList}  ></OneCharacter >
        );

    });

    return (
        <ul className="allCharacters_list"> {renderCharactersList}
        </ul >
    )
}

export default AllCharacters;

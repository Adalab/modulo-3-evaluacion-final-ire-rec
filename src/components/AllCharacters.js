
import OneCharacter from "./OneCharacter";

function AllCharacters(props) {


    const renderCharactersList = props.charactersList.map((charactersList, index) => {

        return (
            <OneCharacter charactersList={charactersList} key={index}  ></OneCharacter >
        );

    });


    return (
        <ul className="allCharacters_list"> {renderCharactersList}
        </ul >
    )
}

export default AllCharacters;

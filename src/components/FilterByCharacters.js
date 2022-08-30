import '../styles/App.scss';
function FilterByCharacters(props) {

    const handleSearchName = (ev) => {
        props.handleSearchCharacter(ev.currentTarget.value);

    };


    return (
        <div>
            <h4>Busca por personaje</h4>
            <label htmlFor="searchCharacter"></label>
            <input
                className="searchCharacter"
                type="text"
                name="searchCharacter"
                id="searchCharacter"
                key="searchCharacter"
                onChange={handleSearchName}
                value={props.searchCharacter}
            >
            </input>
        </div>
    )
}

export default FilterByCharacters;
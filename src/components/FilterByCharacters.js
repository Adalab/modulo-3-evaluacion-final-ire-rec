import '../styles/App.scss';
function FilterByCharacters(props) {

    const handleSearchName = (ev) => {
        props.handleSearchCharacter(ev.target.id, ev.target.value);

    };


    return (
        <div>
            <h4>Busca por personaje</h4>
            <label htmlFor="searchCharacter"></label>
            <input
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
import '../styles/App.scss';
function FilterByCharacters(props) {

    const handleSearchName = (ev) => {
        props.handleFilterCharacter(ev.target.value);

    };

    return (
        <div>
            <h3 className="character_title">Busca por personaje</h3>
            <label htmlFor="searchCharacter" className="search-ch"></label>

            <input
                className="searchCharacter"
                type="text"
                name='searchCharacter'
                id="searchCharacter"
                value={props.searchCharacter}
                onChange={handleSearchName}
            />
        </div>
    )
}

export default FilterByCharacters;
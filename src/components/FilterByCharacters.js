function FilterByCharacters(props) {
    const handleSearch = (ev) => {
        props.handleSearch(ev.currentTarget.value)
    }
    return (
        <div>
            <h4>Busca por personaje</h4>
            <label htmlFor="searchCharacter"></label>
            <input
                type="text"
                name="searchCharacter"
                id="searchCharacter"
                onChange={handleSearch}
                value={props.searchCharacter}
            >
            </input>
        </div>
    )
}
export default FilterByCharacters;
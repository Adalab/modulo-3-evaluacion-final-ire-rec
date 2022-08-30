function FilterByHouse(props) {
    const handleChange = (ev) => {
        props.handleFilterHouses(ev.target.value);
    }

    return (
        <>
            <h3 className="character_house">Busca por casa</h3>
            <label
                className="houses"
                htmlFor="houses"></label>
            <select
                className="houses_select"
                name="houses"
                id="houses"
                value={props.FilterByHouse}
                onChange={handleChange}
            >
                <option defaultValue="Gryffindor" >Gryffindor</option>
                <option value="all">Todos</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Hufflepuff">Ravenclaw</option>
            </select>
        </>
    )
}



export default FilterByHouse;
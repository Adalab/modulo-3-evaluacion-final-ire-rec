function FilterByHouse(props) {
    const handleChange = (ev) => {
        props.handleFilterHouses(ev.target.value);
    }

    return (
        <>
            <label
                class="houses"
                for="houses">Busca por casa</label>
            <select
                class="houses_select"
                name="houses"
                id="houses"
                value={props.FilterByHouse}
                onChange={handleChange}
            >
                <option value="Gryffindor" selected>Gryffindor</option>
                <option value="all">Todos</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Hufflepuff">Ravenclaw</option>
            </select>
        </>
    )
}



export default FilterByHouse;
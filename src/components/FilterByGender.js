function FilterByGender(props) {

    const handleFilter = (ev) => {
        props.handleFilterByGender(ev.target.value)
    }


    return (
        <div> <h3 className="character_gender">Busca por género</h3>
            <label className="gender_label" htmlFor="gender"></label>
            <select className="gender_select" onChange={handleFilter} id="gender">
                <option defaultValue="all">Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre</option>
            </select>

        </div>
    )
}

export default FilterByGender;

function FilterByHouse(props) {

    const handleFilterHouses = (ev) => {
        props.handleFilterHouses(ev.target.value)
    }

    const renderHouse = () => {
        return props.houses.map((houses, index) => {

            return (
                <option
                    key={index} className="option"
                    value={houses}
                >{houses}</option>
            );
        }
        )
    }

    return (
        <div>
            <h4>Busca por casa</h4>
            <label htmlFor="houses"></label>
            <select
                className="houses"
                name=""
                id=""
                onChange={handleFilterHouses}


            >
                <option className="option" value="">Gryffindor</option>
                {renderHouse()}
            </select>
        </div >
    );
}



export default FilterByHouse;
import FilterByCharacters from "./FilterByCharacters";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {

    return (

        <form className="form">
            <FilterByHouse houses={props.houses} handleFilterHouses={props.handleFilterHouses} ></FilterByHouse>
            <FilterByCharacters searchCharacter={props.searchCharacter} handleSearch={props.handleSearch}></FilterByCharacters>
        </form>

    );

}
export default Filters;
import '../styles/App.scss';
import FilterByCharacters from "./FilterByCharacters";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {

    return (

        <form className="form">
            <FilterByHouse
                houses={props.houses}
                handleFilterHouses={props.handleFilterHouses}
                filterHouses={props.filterHouses}>
            </FilterByHouse>

            <FilterByCharacters
                searchCharacter={props.searchCharacter}
                handleSearchCharacter={props.handleSearchCharacter}
                getNames={props.getNames}
            ></FilterByCharacters>
        </form>

    );

}
export default Filters;
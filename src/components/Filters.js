import '../styles/App.scss';
import FilterByCharacters from "./FilterByCharacters";
import FilterByHouse from "./FilterByHouse";


function Filters(props) {

    return (
        <form className="form">
            <FilterByHouse
                handleFilterHouses={props.handleFilterHouses}
                filterHouses={props.filterHouses}>
            </FilterByHouse>

            <FilterByCharacters
                searchCharacter={props.searchCharacter}
                handleFilterCharacter={props.handleFilterCharacter}


            ></FilterByCharacters>
        </form>
    );
}
export default Filters;
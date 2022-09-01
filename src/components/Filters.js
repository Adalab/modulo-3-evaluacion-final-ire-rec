import '../styles/App.scss';
import FilterByCharacters from "./FilterByCharacters";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from './FilterByGender';


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

            <FilterByGender
                handleFilterByGender={props.handleFilterByGender}
                filterByGender={props.filterByGender}>

            </FilterByGender>
        </form>
    );
}
export default Filters;
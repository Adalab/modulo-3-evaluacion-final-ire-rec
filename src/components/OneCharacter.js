import '../styles/App.scss';
import { Link } from 'react-router-dom';

function OneCharacter(props) {

    return (

        <li className="li_charactersList"
        >
            <Link to={`/user/${props.charactersList.id}`} className="link" >
                <img src={props.charactersList.image} className="image_charactersList" alt="image_charactersList"></img>
                <p className="name_charactersList">{`Nombre: ${props.charactersList.name}`}</p><p className="species_charactersList">{`Especie: ${props.charactersList.species}`}</p>
            </Link> </li>
    )
}


export default OneCharacter;
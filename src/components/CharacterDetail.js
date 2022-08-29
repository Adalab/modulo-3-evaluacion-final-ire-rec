import { Link } from 'react-router-dom';
import '../styles/App.scss';
function CharacterDetail(props) {

    return (
        <section>
            <Link to={"/"}> <p className="volver">Volver</p> </Link>
            <li className="li_charactersList"
            >
                <img src={props.charactersList.image} className="image_charactersList" alt="image_charactersList"></img>
                <p className="name_charactersList">{`Nombre: ${props.charactersList.name}`}</p><p className="species_charactersList">{`Especie: ${props.charactersList.species}`}</p> </li>
        </section >
    )
}

export default CharacterDetail;
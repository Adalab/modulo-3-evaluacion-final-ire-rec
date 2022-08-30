import { Link } from 'react-router-dom';


function CharacterDetail(props) {

    return (
        <section>
            <a href="#">
                <Link to={"/"} class="link2"> <p className="volver">Volver</p> </Link>
                <li className="li_charactersList">
                    <img src={props.charactersList.image} className="image_charactersList" alt="image_charactersList"></img>
                    <p className="name_charactersList">{`Nombre: ${props.charactersList.name}`}</p><p className="species_charactersList">{`Especie: ${props.charactersList.species}`}</p> </li>
            </a>
        </section >
    )
}

export default CharacterDetail;
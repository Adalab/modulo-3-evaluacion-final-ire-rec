import { Link } from 'react-router-dom';


function CharacterDetail(props) {
    console.log(props);
    return (
        <section>
            <a href="#">
                <Link to={"/"} class="link2"> <p className="volver">Volver</p> </Link>
                <li className="li_charactersList">
                    <img src={props.user.image} className="image_charactersList" alt="image_charactersList"></img>
                    <p className="name_charactersList">{`Nombre: ${props.user.name}`}</p><p className="species_charactersList">{`Especie: ${props.user.species}`}</p> </li>
            </a>
        </section >
    )
}

export default CharacterDetail;
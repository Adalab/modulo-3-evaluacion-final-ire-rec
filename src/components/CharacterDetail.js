import { Link } from 'react-router-dom';


function CharacterDetail(props) {
    console.log(props);
    return (
        <section>

            <Link to={"/"} className="link2"> <p className="volver">Volver</p></Link>
            <li className="li_charactersList_detail">
                <div className="div_detail">
                    <p className="name_charactersList_detail"> {`${props.user.name}`}</p>
                    <div className="div_img"> <img src={props.user.image} className="image_charactersList_detail" alt="image_charactersList"></img></div>

                    <p className="species_charactersList_detail">{`Especie: ${props.user.species}`}</p>
                    <p className="status_charactersList_detail">{`Género: ${props.user.gender}`}</p>
                    <p className="status_charactersList_detail">{`Casa: ${props.user.house}`}</p>
                </div>
            </li>

        </section >
    )
}

export default CharacterDetail;
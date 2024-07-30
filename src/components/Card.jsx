import { React } from 'react';

function Card({ women }) {
    const { id, name, lastName, nationality, bio, photo } = women

    return (
        <article id={id} className='card' >
            <h2>{`${name} ${lastName}`}</h2>
            <h3>{nationality}</h3>
            <h5>{bio}</h5>
            <h4><img src={photo} alt={`${name} ${lastName}`} /> </h4>
            <div>
                <button >Eliminar Tarea</button>
            </div>
        </article>
    )
}

export default Card;
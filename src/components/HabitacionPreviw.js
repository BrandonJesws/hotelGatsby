import React from 'react';
// import Image from 'gatsby-image';

export default function HabitacionPreviw({habitacion}) {
    const {contenido, image, titulo, slug} = habitacion; 

    return (
        <div>
            {/* <Image fluid={image.fluid} /> */}
           <div>
                <h3>{titulo}</h3>
                <p>{contenido}</p>
           </div>
        </div>
    )
}

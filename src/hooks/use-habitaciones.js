import { graphql, useStaticQuery } from 'gatsby';

export default function useHabitaciones(){
const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion{
            nodes{
                titulo
                id
                slug
                contenido
                imagen {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`)
return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido:habitacion.contenido,
    image: habitacion.image,
    slug: habitacion.slug
}));

console.log(data);

}
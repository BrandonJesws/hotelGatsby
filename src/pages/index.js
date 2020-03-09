import React from "react";
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import ImageHotel from '../components/ImagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import HabitacionPreviw from '../components/HabitacionPreviw';
import useHabitaciones from '../hooks/use-habitaciones';

const IndexPage = () => {

  const habitaciones = useHabitaciones();
  console.log(habitaciones);
  return (
    <Layout>
      <ImageHotel />
      <ContenidoInicio />
      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>
        Nuestras habitaciones:
      </h2> 
      <ul>
        {habitaciones.map(habitacion => { 
          return <HabitacionPreviw key={habitacion.id} habitacion={habitacion} />
        })}
      </ul>
    </Layout>
  );
}

export default IndexPage

/** 
 * 45
 * 35
 * 
*/
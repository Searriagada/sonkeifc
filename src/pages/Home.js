import React from "react";
import { ApiArray } from '../api/ApiArray'
import { ApiObject } from '../api/ApiObject'
import { Tittle } from '../components/Tittle';
import { ImgTop } from '../components/ImgTop';
import { Historia } from '../components/Historia';
import { CardJugador } from '../components/CardJugador';
import { Carousel } from '../components/Carousel';
import { Table } from "../components/Table";
import '../styles/Home.css';

export const Home = () => {

    //Instanciar endpoint desde bd con tabla Jugadores
    const equipo = ApiArray('http://localhost/sonkeifc_back/controller/PlayerController.php');

    //Instanciar endpoint desde bd con tabla Tesimonios
    const testimonioData = ApiObject('http://localhost/sonkeifc_back/controller/TestimonyController.php');
    //Instanciar endpoinrts desde bd con tabla Entrenamiento
    const entrenamiento = ApiObject('http://localhost/sonkeifc_back/controller/TrainingController.php')
    return (
        <>
            <section className='imgtop-section'>
                <ImgTop
                    text='VEN A SER PARTE DE LOS MEJORES'
                />
            </section>
            <section className='historia-section' id="historia">
                <Historia
                    textOne={'Al igual que tú, amamos el fútbol, nos apasiona correr por la cancha y entregarlo todo en cada partido. '}
                    textTwo={"El fútbol no es solo un deporte para nosotros, es una forma de vida, una pasión que nos impulsa a superarnos día a día."} />
            </section>
            <section className='equipo-section' id="equipo">
                <Tittle
                    text='Nuestro equipo'
                />
                <div className='cardContainer'>
                    {
                        [equipo.map((card) => (
                            <CardJugador

                                id={card.id_jugador}
                                posicion={card.posicion}
                                nombre={card.nombre}
                                profesion={card.profesion}
                                rrss={card.rrss}
                                imagen={card.imagen}
                            />
                        ))]
                    }
                </div>
            </section>
            <section className="entrenamiento-section" id="entrenamiento">
                <Tittle
                    text='Próximas fechas'
                />
                <div className="table-entrenamiento">

                    <Table
                        datas={entrenamiento.slides}
                    />
                </div>
            </section>
            <section className='testimonio-section' id='testimonio'>
                <Tittle
                    text='Testimonios'
                />
                <div className='carouselSection'>
                    <Carousel
                        data={testimonioData.slides}
                    />
                </div>
            </section>
            <section>
                <h1>Formulario</h1>
            </section>
        </>
    );
}
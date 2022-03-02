import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4ac40256c61746c98a0b22ca570e0844`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header
          titulo='Breaking News'
        />

        <div className="container white">
            <Formulario
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;

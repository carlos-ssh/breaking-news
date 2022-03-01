import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment className="App">
      <Header
        titulo="📰 Breaking News"
      />

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;

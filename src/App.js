import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


    

function App() {
  
  //state de formulario 
  const [search, setSearch ] = useState({
    city: '',
    country: ''
  }); 

  const {city,country} = search;

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  useEffect( () => {
    const callAPI = async () => {
      if(query) {
        const apiKey = '9e9c97052713c07e4d9fd92786bb3a29';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

        const response = await fetch(url);
        const res = await response.json();
        setResult(res);
        setQuery(false);

        //detecta si hubo resultados en la consulta 
        if(res.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }

      }
    }
    callAPI();
  },[query]);

  let component;
  if(error) {
    component = <Error mensaje="No hay resultados"></Error>
  } else {
   component = <Clima
      result={result}
    ></Clima>
  }

  return (
    <Fragment>
      <Header
        titulo ="Clima React App"
      ></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search = {search}
                setSearch = {setSearch}
                setQuery = {setQuery}
              ></Formulario>
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

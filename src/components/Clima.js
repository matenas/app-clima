import React from 'react';

const Clima = ({result}) => {

    const {name,main} = result;
    if(!name) return null;

    // de grados kelvin a celcius
    const celsiusNow = parseInt(main.temp - 273.15);
    const celsiusMax = parseInt(main.temp_max - 273.15);
    const celsiusMin = parseInt(main.temp_min - 273.15);

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {celsiusNow} <span>&#x2103;</span>
                </p>
                <p className="">
                    {celsiusMax} <span>&#x2103;</span>
                </p>
                <p className="">
                    {celsiusMin} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};

export default Clima;
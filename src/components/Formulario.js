import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({search,setSearch,setQuery}) => {

    const [error, setError] = useState(false);

    //extraer ciudad y pais 
    const {city,country} = search;

    //funcion que coloca elementos en el state
    const handleChange = (e) => {
        e.preventDefault();

        //actualizarState
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //validar
        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }
        setError(false);


        //pasar al componente principal
        setQuery(true);

    };


    return (
        <div>
            <form 
                onSubmit={handleSubmit}
            >   
                {error ? <Error mensaje="Ambos campos son obligatorios"></Error> : null}
                <div className="input-field col s12">
                    <input 
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                </div>
                <div className="input-field col s12">
                    <select 
                        name="country" 
                        id="country"
                        value={country}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione un pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CL">Chile</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <div className="input-field col s12">
                    <button 
                        className="btn btn-large yellow accent-4 btn-block  waves-effect waves-light" 
                        type="submit" 
                        name="action"
                    >Search
                        <i className="material-icons right"></i>
                    </button>
                </div>
            </form>
        </div>
            
    );
};

export default Formulario;
import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div>
          <p className="error red darken-4" >{mensaje}</p>
        </div>
    );
};

export default Error;
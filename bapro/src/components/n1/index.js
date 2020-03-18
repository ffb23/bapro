import React from 'react';
import N2 from '../n2/index';

const index = ({ showButtons }) => {

    var n1 = [
        { title: 'Prestamos Personales', n2: 'anses' },
        { title: 'Prestamos Hipotecarios', n2: 'isp' }
    ]


    return (
        <div>
            {n1.map((n, i) => (
                <button
                    type="button"
                    className="btn btn-dark prestamosPersonales"
                    onClick={showButtons}
                    key={i}
                >
                    {n.title}
                </button>
            ))}
        </div>
    )
}

export default index;
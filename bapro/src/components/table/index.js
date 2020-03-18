import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {

    var columns = [
        { title: 'Site', prop: 'site' },
        { title: 'Country', prop: 'country' },
        { title: 'Domain', prop: 'domain', validation: /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/ },
        { title: 'Phone', prop: 'phone', editable: false }
    ];
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">
                            <button className="btn btn-dark desplegarButton">+</button>
                        </th>
                        <th scope="col">Modo</th>
                        {months.map((m, i) => (
                            <td key={i}>
                                {m}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Saldo Inicial</th>
                        {columns.map((c, i) => (
                            <td
                                key={i}
                            >
                                {c.title}
                            </td>
                        ))}

                    </tr>
                    <tr>
                        <th scope="row">Colocación</th>
                        {columns.map((c, i) => (
                            <td
                                key={i}
                            >
                                {c.title}
                            </td>
                        ))}

                    </tr>
                    <tr>
                        <th scope="row">Saldo Final</th>
                        {columns.map((c, i) => (
                            <td
                                key={i}
                            >
                                {c.title}
                            </td>
                        ))}

                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default Index;
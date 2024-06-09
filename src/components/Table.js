import React from "react";
import '../styles/Table.css';

export function Table({ datas }) {

    return (
        <div className="entrenamiento-table">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>lugar</th>
                        <th>fecha</th>
                        <th>hora</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id_entrenamiento}</td>
                            <td>{item.lugar}</td>
                            <td>{item.fecha}</td>
                            <td>{item.hora}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
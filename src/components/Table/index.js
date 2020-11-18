import React from 'react';

import './styles.css';

function Table (props) {
  return <>
    <table id="table">
      <thead>
        <tr>
          <th>Data/Hora</th>
          <th>Origem</th>
          <th>Destino</th>
          <th>Tempo</th>
          <th>Plano FaleMais</th>
          <th>Com FaleMais</th>
          <th>Sem FaleMais</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((e) => (
          <tr>
            <td>{e.date}</td>
            <td>{e.origin}</td>
            <td>{e.destiny}</td>
            <td>{e.time}</td>
            <td>{e.plan}</td>
            <td>{e.planPrice}</td>
            <td>{e.noPlanPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default Table;
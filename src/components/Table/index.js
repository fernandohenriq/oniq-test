import React from 'react';


import './styles.css';

function Table (props) {
  return <div>
  <div style={{overflowX: "auto"}}>
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
          {props.data.map((e, i) => (
            <tr key={i}>
              <td>{e.date}</td>
              <td>{e.origin}</td>
              <td>{e.destiny}</td>
              <td>{e.minutes}</td>
              <td>{e.plan}</td>
              <td>$ {e.planPrice}</td>
              <td>$ {e.noPlanPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
}

export default Table;
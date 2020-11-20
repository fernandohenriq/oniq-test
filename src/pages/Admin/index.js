import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../utils/firebase";

import Header from '../../components/Header';
import Table from '../../components/Table';

import './styles.css'

function Admin() {

  const [tableData, setTableData] = useState([]);
  
  React.useEffect(() => {
    const logRef = firebase.database().ref('log');
    
    logRef.on('value', (snapshot) => {
      const log = snapshot.val();
      const logList = [];

      for (let i in log) {
        logList.push(log[i]);
      }
      
      setTableData(logList);
    })
  }, []);

  return <>
    <Header />
    <div id="admin">
      <div className="container">
        <div>
          <Link to="" onClick={() => firebase.auth().signOut()}><i className="fa fa-sign-out" aria-hidden="true">Sair</i></Link>
        </div>
        <div className="content">
          <Table data={tableData}></Table>
        </div>
      </div>
    </div>
  </>
}

export default Admin;
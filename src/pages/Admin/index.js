import React, { useState } from 'react';
import firebase from "../../firebase";

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
    <button onClick={() => firebase.auth().signOut()}>Sair</button>
    <div>
      <Table data={tableData}></Table>
    </div>
  </>
}

export default Admin;
import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import firebase from "../../utils/firebase";
=======
import firebase from "../../firebase";
>>>>>>> d6aef5369daf2f453d47c5c7e4a050e9055de72b

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
<<<<<<< HEAD
    <div id="admin">
      <div className="container">
        <div>
          <Link to="" onClick={() => firebase.auth().signOut()}><i className="fa fa-sign-out" aria-hidden="true">Sair</i></Link>
        </div>
        <div className="content">
          <Table data={tableData}></Table>
        </div>
      </div>
=======
    <button onClick={() => firebase.auth().signOut()}>Sair</button>
    <div>
      <Table data={tableData}></Table>
>>>>>>> d6aef5369daf2f453d47c5c7e4a050e9055de72b
    </div>
  </>
}

export default Admin;
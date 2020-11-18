import React, { useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Table from '../../components/Table';

import './styles.css'

function Admin() {
  return <>
    <Header />
    <div>
      <Table data={[
        {date: "10/07/2018 11:35:29", origin: "011", destiny: "016", time: 20, plan: "FaleMais 30", planPrice: "0,00", noPlanPrice: "20,35"},
        {date: "10/07/2018 12:15:45", origin: "018", destiny: "011", time: 60, plan: "FaleMais 60", planPrice: "0,00", noPlanPrice: "40,43"},
        {date: "10/07/2018 11:35:29", origin: "011", destiny: "016", time: 20, plan: "FaleMais 30", planPrice: "0,00", noPlanPrice: "20,35"},
        {date: "10/07/2018 12:15:45", origin: "018", destiny: "011", time: 60, plan: "FaleMais 60", planPrice: "0,00", noPlanPrice: "40,43"},
        {date: "10/07/2018 11:35:29", origin: "011", destiny: "016", time: 20, plan: "FaleMais 30", planPrice: "0,00", noPlanPrice: "20,35"},
        {date: "10/07/2018 12:15:45", origin: "018", destiny: "011", time: 60, plan: "FaleMais 60", planPrice: "0,00", noPlanPrice: "40,43"},
        {date: "10/07/2018 11:35:29", origin: "011", destiny: "016", time: 20, plan: "FaleMais 30", planPrice: "0,00", noPlanPrice: "20,35"},
        {date: "10/07/2018 12:15:45", origin: "018", destiny: "011", time: 60, plan: "FaleMais 60", planPrice: "0,00", noPlanPrice: "40,43"},
      ]}></Table>
    </div>
  </>
}

export default Admin;
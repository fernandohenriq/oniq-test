import React, { useEffect, useState } from 'react';
import firebase from "../../firebase";

import Header from '../../components/Header';
import Button from '../../components/Button';

import './styles.css'

function Calculator(){

  const plans = [
    {value: "1", label: "FaleMais 30", time: 30},
    {value: "2", label: "FaleMais 60", time: 60},
    {value: "3", label: "FaleMais 120", time: 120}
  ];

  const cities = [
    {value: "1", code: "011"},
    {value: "2", code: "016"},
    {value: "3", code: "017"},
    {value: "4", code: "018"}
  ];

  const codeTable = [
    {valuee: "1", origin: "011", destiny: "016", price: 1.90},
    {valuee: "2", origin: "016", destiny: "011", price: 2.90},
    {valuee: "3", origin: "011", destiny: "017", price: 1.70},
    {valuee: "4", origin: "017", destiny: "011", price: 2.70},
    {valuee: "5", origin: "011", destiny: "018", price: 0.90},
    {valuee: "6", origin: "018", destiny: "011", price: 1.90},
  ];

  const [plan, setPlan] = useState("3");
  const [origin, setOrigin] = useState("4");
  const [destiny, setDestiny] = useState("1");
  const [minutes, setMinutes] = useState(200);
  const [result, setResult] = useState({
    withPlan: '0,00',
    withOutPlan: '0,00'
  })

  useEffect(() => {
    const orig = cities[origin-1].code;
    const dest = cities[destiny-1].code;
    const time = plans[plan-1].time
    const tax = codeTable.find((e) => e.origin === orig && e.destiny === dest);

    const resPlan = () => {
      if (minutes > time) {
        return tax ? String((((minutes-time)*tax.price)*1.1).toFixed(2)).replace(".",",") : '-';
      } else {
        return '0,00';
      }
    }
    
    const resNoPlan = () => {
      return tax ? String(((minutes)*tax.price).toFixed(2)).replace(".",",") : '-';
    }

    setResult({
      withPlan: resPlan(),
      withOutPlan: resNoPlan()
    });

    const log = {
      date: new Date().toLocaleString(),
      origin: orig,
      destiny: dest,
      minutes: minutes,
      plan: plans[plan-1].label,
      planPrice: resPlan(),
      noPlanPrice: resNoPlan()
    }

    const dataRef = firebase.database().ref('log');
    dataRef.push(log);
    
  }, [plan, origin, destiny, minutes]);

  return(
    <>
      <Header />
      <div className="container">
        <div id="calc">
          <p id="text">
            Veja qual plano <span>FaleMais</span> combina com você, de forma simples, fácil e transparente!
          </p>
          <form action="#">
            <div className="input-group">
              <label htmlFor="input-plan">Escolha um de nossos planos</label>
              <select name="input-plan" id="input-plan" value={plan} onChange={e => setPlan(e.target.value)}>
                {plans.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-plan">DDD de origem</label>
              <select className="select" name="input-plan" id="input-plan" value={origin} onChange={e => setOrigin(e.target.value)}>
                {cities.map((option) => (
                  <option key={option.value} value={option.value}>{option.code}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-plan">DDD de destino</label>
              <select className="select" name="input-plan" id="input-plan" value={destiny} onChange={e => setDestiny(e.target.value)}>
                {cities.map((option) => (
                    <option key={option.value} value={option.value}>{option.code}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-minutes">Quantidade de minutos</label>
              <input className="input" type="number" name="input-minutes" id="input-minutes" placeholder="0 min" value={minutes} onChange={e => setMinutes(e.target.value)}/>
            </div>
          </form>
          <div id="value">
            <div id="show-value">
              <p>Valor por minuto:</p>
              <p>R$ <span>{result.withPlan}</span></p>
              <p>Sem um plano: <s>R$ {result.withOutPlan}</s></p>
              <div className="input-group">
                <Button theme="secondary">Peça já o seu plano</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
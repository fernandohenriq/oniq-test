import React, { useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';

import './styles.css'

function Calculator(){

  const [plans, setPlans] = useState([
    {value: "1", label: "FaleMais30", time: 30},
    {value: "2", label: "FaleMais60", time: 60},
    {value: "3", label: "FaleMais120", time: 120}
  ]);

  const [cities, setCities] = useState([
    {value: "1", label: "011	São Paulo -	SP", code: "011"},
    {value: "2", label: "011	Aluminio -	SP", code: "011"},
    {value: "3", label: "016	Altinopolis -	SP", code: "016"},
    {value: "4", label: "016	Americo Brasiliense -	SP", code: "016"},
    {value: "5", label: "017	Adolfo -	SP", code: "017"},
    {value: "6", label: "017	Altair -	SP", code: "017"},
    {value: "7", label: "018	Presidente Prudente -	SP", code: "018"},
    {value: "8", label: "018	Presidente Venceslau -	SP", code: "018"}
  ]);

  const [codeTable, setCodeTable] = useState([
    {valuee: "1", origin: "011", destiny: "016", price: 1.90},
    {valuee: "2", origin: "016", destiny: "011", price: 2.90},
    {valuee: "3", origin: "011", destiny: "017", price: 1.70},
    {valuee: "4", origin: "017", destiny: "011", price: 2.70},
    {valuee: "5", origin: "011", destiny: "018", price: 0.90},
    {valuee: "6", origin: "018", destiny: "011", price: 1.90},
  ]);

  const [plan, setPlan] = React.useState("3");
  const [origin, setOrigin] = React.useState("7");
  const [destiny, setDestiny] = React.useState("1");
  const [minutes, setMinutes] = React.useState(200);
  const [planResult, setPlanResult] = React.useState("0,00");
  const [noPlanResult, setNoPlanResult] = React.useState("0,00");

  React.useEffect(() => {
    const oriCode = cities.find(e => e.value === origin).code;
    const desCode = cities.find(e => e.value === destiny).code;
    const price = codeTable.find(e => e.origin === oriCode && e.destiny === desCode);
    if(price){
      setPlanResult(() => {
        if(minutes <= plans[plan-1].time){
          return "0,00";
        }else{
          var m = ((minutes - plans[plan-1].time)*price.price)*1.1;
          return String(m.toFixed(2)).replace(".",",");
        }
      });
      setNoPlanResult(() => {
        var m = minutes*price.price;
        return String(m.toFixed(2)).replace(".",",");
      });
    } else {
      setPlanResult("-");
      setNoPlanResult("-");
    }
  }, [cities, origin, destiny, codeTable, minutes, plans, plan, planResult]);

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
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-plan">DDD de destino</label>
              <select className="select" name="input-plan" id="input-plan" value={destiny} onChange={e => setDestiny(e.target.value)}>
                {cities.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
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
              <p>R$ <span>{planResult}</span></p>
              <p>Sem um plano: <s>R$ {noPlanResult}</s></p>
              <div className="input-group">
                <Button>Peça já o seu plano</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
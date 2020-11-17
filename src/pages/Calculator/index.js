import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css'

function Calculator(){

  const [plans, setPlans] = useState([
    {label: "FaleMais30", value: "1"},
    {label: "FaleMais60", value: "2"},
    {label: "FaleMais120", value: "3"}
  ]);

  const [cities, setCities] = useState([
    {label: "011	São Paulo -	SP", value: "011"},
    {label: "011	Aluminio -	SP", value: "011"},
    {label: "016	Altinopolis -	SP", value: "016"},
    {label: "016	Americo Brasiliense -	SP", value: "016"},
    {label: "017	Adolfo -	SP", value: "017"},
    {label: "017	Altair -	SP", value: "017"},
    {label: "018	Presidente Prudente -	SP", value: "018"},
    {label: "018	Presidente Venceslau -	SP", value: "018"}
  ]);

  const [showValue, setShowValue] = useState('0.00');

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
              <select name="input-plan" id="input-plan">
                {plans.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-plan">DDD de origem</label>
              <select className="select" name="input-plan" id="input-plan">
                {cities.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-plan">DDD de destino</label>
              <select className="select" name="input-plan" id="input-plan">
                {cities.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-minutes">Quantidade de minutos</label>
              <input className="input" type="number" name="input-minutes" id="input-minutes" placeholder="0 min" />
            </div>
            <div id="show-value">
              <p>Você paga:</p>
              <p>R$ <span>0,00</span></p>
              <p>Sem um plano: <s>R$ {showValue}</s></p>
            </div>
            <div className="input-group">
              <button onClick="">Peça já o seu plano</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
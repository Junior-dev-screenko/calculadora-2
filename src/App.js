import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('100');

  const [parte1Item1, setParteItem1] = useState('0');
  const [silumtaneousPolicy, setSilumtaneousPolicy] = useState('0');

  const [item1, setItem1] = useState('0');
  const [item2, setItem2] = useState('0');
  const [item3, setItem3] = useState('0');
  const [item4, setItem4] = useState('0');
  const [item5, setItem5] = useState('0');
  const [item6, setItem6] = useState('0');
  const [item7, setItem7] = useState('0');
  const [item8, setItem8] = useState('0');
  const [item9, setItem9] = useState('0');
  const [item10, setItem10] = useState('0');
  const [item11, setItem11] = useState('0');
  const [item12, setItem12] = useState('0');
  
  const [additionalExpenses1, setAdditionalExpenses1] = useState('800');
  const [additionalExpenses2, setAdditionalExpenses2] = useState('350');
  const [additionalExpenses3, setAdditionalExpenses3] = useState('31.50');
  const [additionalExpenses4, setAdditionalExpenses4] = useState('200');

  const floridaTitleInsuranceRates = e => {
    if(e.target.checked && e.target.id === 'silumtaneousPolicy')setSilumtaneousPolicy(25);
    else if(e.target.checked === false && e.target.id === 'silumtaneousPolicy')setSilumtaneousPolicy(0);
  }

  let insuranceRate = Number(input) + Number(silumtaneousPolicy);
  let porcentajeInsuranceRate = (insuranceRate * 10) / 100;



  const handleChange = e => {
    if(e.target.checked && e.target.id === 'item6') setItem6(25);
    else if(e.target.checked === false && e.target.id === 'item6') setItem6(0);

    if(e.target.checked && e.target.id === 'item7') setItem7(25);
    else if(e.target.checked === false && e.target.id === 'item7') setItem7(0);

    if(e.target.checked && e.target.id === 'item8') setItem8(porcentajeInsuranceRate);
    else if(e.target.checked === false && e.target.id === 'item8') setItem8(0);

    if(e.target.checked && e.target.id === 'item11') setItem11(porcentajeInsuranceRate);
    else if(e.target.checked === false && e.target.id === 'item11') setItem11(0);

    if(e.target.checked && e.target.id === 'item12') setItem12(25);
    else if(e.target.checked === false && e.target.id === 'item12') setItem12(0);
  }

  const pulsar = e => {
    if(e.target.checked && e.target.id === 'item1') {setItem1(25); setItem2(0);}
    else if(!e.target.checked && e.target.id === 'item1') {setItem1(0); setItem2(0);}
    if(e.target.checked && e.target.id === 'item2') {setItem2(25); setItem1(0);}
    else if(!e.target.checked && e.target.id === 'item2') {setItem2(0); setItem1(0);}

    if(e.target.checked && e.target.id === 'item3') {setItem3(25); setItem4(0); setItem5(0);}
    else if(!e.target.checked && e.target.id === 'item3') {setItem3(0); setItem4(0); setItem5(0);}
    if(e.target.checked && e.target.id === 'item4') {setItem3(0); setItem4(25); setItem5(0);}
    else if(!e.target.checked && e.target.id === 'item4') {setItem3(0); setItem4(0); setItem5(0);}
    if(e.target.checked && e.target.id === 'item5') {setItem3(0); setItem4(0); setItem5(25);}
    else if(!e.target.checked && e.target.id === 'item5') {setItem3(0); setItem4(0); setItem5(0);}

    if(e.target.checked && e.target.id === 'item9') {setItem9(porcentajeInsuranceRate); setItem10(0);}
    else if(!e.target.checked && e.target.id === 'item9') {setItem9(0); setItem10(0);}
    if(e.target.checked && e.target.id === 'item10') {setItem10(porcentajeInsuranceRate); setItem9(0);}
    else if(!e.target.checked && e.target.id === 'item10') {setItem10(0); setItem9(0);}

    if (!e.target.checked) return
      let elem;
      if(e.target.id === 'item1' || e.target.id === 'item2' ) elem=document.getElementsByName('item1-2');
      if(e.target.id === 'item9' || e.target.id === 'item10' ) elem=document.getElementsByName('item9-10');
      if(e.target.id === 'item3' || e.target.id === 'item4' || e.target.id === 'item5' ) elem=document.getElementsByName('item3-4-5');
      for(let i=0;i<elem.length;i++) 
          elem[i].checked=false;
          e.target.checked=true;

  }

  const handleChangeText = e => {
    setInput(e.target.value);
    setParteItem1(e.target.value);
    if(e.target.value <= 100){
      setInput(100);
    }
  }

  
  let resultado = Number(item1) + Number(item2) + Number(item3) + Number(item4) + Number(item5) + Number(item6) + Number(item7) + Number(item8) + Number(item9) + Number(item10) + Number(item11) + Number(item12) + Number(input) + Number(additionalExpenses1) + Number(additionalExpenses2) + Number(additionalExpenses3) + Number(additionalExpenses4) + Number(silumtaneousPolicy);
  
  return (
    <div className="App">
      <div className='calculadora__contendor'>

          <div className="Boton">
              <p className="Boton__titulo">Insured Amount</p>
              <input type="number" className="Boton__number" value={Number(parte1Item1).toFixed(2)} id='text' onChange={handleChangeText} /> 
          </div>

          <h3>Florida Title Insurance Rates</h3>
          <div className="Boton">
              <p className="Boton__titulo">$0 to $100,000: $5.75 per $1000 (min $100)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Number(input).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">$100,000 to $1 million: $5.00 per $1000</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ </p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">$1 million to $5 million: $2.50 per $1000</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ </p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">$5 million to $10 million: $2.25 per $1000</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ </p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">$10 million: $2.00 per $1000</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ </p>
              </div>
          </div>

          <h3>Simultaneous Policy</h3>

          <div className="Boton">
              <p className="Boton__titulo">Both an Owner's Policy (OP) and Loan Policy (LP) are to be issued.</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" id='silumtaneousPolicy' onChange={floridaTitleInsuranceRates} /> 
                <p className="Boton__precio">$ {Number(silumtaneousPolicy).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <h3 className="Boton__titulo">Insurance Rate</h3>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(insuranceRate)}</p>
              </div>
          </div>

          {/* ------------------------*************************************------------------ */}
          <br/><br/>
          <h3>Florida Title Insurance Endorsements</h3>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 4.1 Condo ($25) (OP/LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="checkbox" name="item1-2" className="Boton__input" id='item1' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item1)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 5.1 PUD ($25) (OP/LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="checkbox" name="item1-2" className="Boton__input" id='item2' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 6.0 Negotiable Rate Mortgage ($25) (LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item3-4-5" id='item3' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item3)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 6.1 Variable Rate Mortgage ($25) (LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item3-4-5" id='item4' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item4)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 6.2 Neg. Amoritzation Mortgage ($25) (LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item3-4-5" id='item5' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item5)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 7.0 Manufactured Housing ($25) (OP/LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item6" id='item6' onChange={handleChange} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item6)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">ALTA 8.1 Environmental Protection Liens ($25) (LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item7" id='item7' onChange={handleChange} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item7)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Florida Form 9 (10% of Insurance Rate) (LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item8" id='item8' onChange={handleChange} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item8)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Florida Form 9.1 (10% of Insurance Rate) (vacant land) (OP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item9-10" id='item9' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item9)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Florida Form 9.2 (10% of Insurance Rate) (improved land) (OP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item9-10" id='item10' onChange={pulsar} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item10)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Navigational Servitude (10% of Insurance rate) (water front) (OP/LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item11" id='item11' onChange={handleChange} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item11)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Survey (survey not required for condo) (OP/LP)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <input type="CHECKBOX" className="Boton__input" name="item12" id='item12' onChange={handleChange} /> 
                <p className="Boton__precio">$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(item12)}</p>
              </div>
          </div>

          <br/><br/>
          <h3>Additional Expenses</h3>

          <div className="Boton">
              <p className="Boton__titulo">Settlement fee</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Number(additionalExpenses1).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Land Survey + Elevation Certificate (estimated outside vendor)</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Number(additionalExpenses2).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Recording Fee deed (estimated from county)**</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Number(additionalExpenses3).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Recording Fee Mortgage (estimated from county)**</p>
              <div className='Boton__contenedorPrecioYCheck'>
                <p className="Boton__precio">$ {Number(additionalExpenses4).toFixed(2)}</p>
              </div>
          </div>

          <div className="Boton">
              <p className="Boton__titulo">Estimated Total</p>
              <div>$ {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  currencyDisplay: "symbol",
                }).format(resultado)}</div>
          </div>
      </div>
    </div>
  );
}

export default App;

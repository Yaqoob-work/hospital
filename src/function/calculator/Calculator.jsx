import React, { useState } from "react";
// import $ from 'jquery';
import "./Calculator.css"



const Calculator = () => {

  const [current,setcurrent] = useState('');
  const [pre,setPrev] = useState('');
  const [operations,setOperations] = useState('');

  const numClickHandler=(event)=>{
   const value=event.target.getAttribute("value")
   if(value === ('.') && current.includes('.')) return;
    setcurrent(current + value);
    if(value===current){
      setcurrent(current + value);
    }
  }

  const deleteHandler = ()=>{
    setcurrent(String(current).slice(0,-1))
  }

  const allClearHandler = ()=>{
    setcurrent('')
    setPrev('')
    setOperations('')
  }

const operationHandler = (e)=>{
  let operatValue = e.target.value
if(current === '')return
if(pre !== ''){
let value=calculate()
setPrev(value)
}else{
  setPrev(current)
}
setcurrent('')
setOperations(operatValue)
};

const equal = ()=>{
  let value=calculate()
  if( value===undefined || value==null) return
  setcurrent(value)
  setPrev('')
  setOperations('')
}

const calculate = ()=>{
 let result;
 let prevNumber=parseFloat(pre)
 let currentNumber=parseFloat(current)
 if (isNaN(prevNumber) || isNaN(currentNumber)) return
 switch(operations){
  case '+':
    result = prevNumber + currentNumber;
    break;
  case '*':
    result = prevNumber * currentNumber;
    break;
  case '/':
    result = prevNumber / currentNumber;
    break;
  case '-':
    result = prevNumber - currentNumber;
    break;
    default: return
 }
 return result
}
  return (
    <div>
      <div className="calculator-area mx-auto justify-content-center  text-center">
        <div className="history col-12">
          <div className="logo">CALCULATOR</div>
          {/* <div className="below-logo">
            <input
              type="text"
              className="border border-primary form-control-sm text-center history-screen"
              disabled
              name="history-screen"
              value={pre + operations+current}
            />
          </div>  */}
        </div>
        <div className="row">
          <input
            type="text"
            className="input-screen border border-primary form-control-lg col-9 text-end"
            disabled
            name="input-screen"
             value={pre+operations+current}
            
          />
          <button type="button" className="reset col" value="reset" onClick={allClearHandler}>
            RESET
          </button>
        </div>
        <div className="row">
          <button type="button" className="asd col" value="7" onClick={numClickHandler}>
            7
          </button>
          <button type="button" className="asd col" value="8" onClick={numClickHandler}>
            8
          </button>
          <button type="button" className="asd col" value="9" onClick={numClickHandler}>
            9
          </button>
          <button type="button" className="calc col" onClick={deleteHandler}>
            DEL
          </button>
        </div>
        <div className="row">
          <button type="button" className="asd col" value="4" onClick={numClickHandler}>
            4
          </button>
          <button type="button" className="asd col" value="5" onClick={numClickHandler}>
            5
          </button>
          <button type="button" className="asd col" value="6" onClick={numClickHandler}>
            6
          </button>
          <button type="button" className="calc col" value="+" onClick={operationHandler}>
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="asd col" value="1" onClick={numClickHandler}>
            1
          </button>
          <button type="button" className="asd col" value="2" onClick={numClickHandler}>
            2
          </button>
          <button type="button" className="asd col" value="3" onClick={numClickHandler}>
            3
          </button>
          <button type="button" className="calc col" value="*" onClick={operationHandler}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="asd col mod" value="%" >
            mod
          </button>
          <button type="button" className="asd col" value="0" onClick={numClickHandler}>
            0
          </button>
          <button type="button" className="asd col" value="." onClick={numClickHandler} >
            .
          </button>
          <button type="button" className="calc col" value="/" onClick={operationHandler}>
            &divide;
          </button>
        </div>
        <div className="row">
          <button type="button" className="equalto col-9" onClick={equal}>
            =
          </button>
          <button type="button" className="calc col ms-2 " value="-" onClick={operationHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

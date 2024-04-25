import React from 'react';
import './Calculate.css';
import { useState } from 'react'

const Calculate = () => {
  const [current, setCurrent] = useState('')
  const [previous, setPrevious] = useState('')
  const [operand, setOperand] = useState('');

  const HandleNumbers=(e)=>{

    if (current.includes('.') && e.target.value === '.') return;
    setCurrent((prev)=>(prev + e.target.value))
  };
  
  const handleOperation=(e)=>{
    setOperand( e.target.value);
    if (current === '') return;
    if (previous !== '');
    else{
      setPrevious(current);
      setCurrent('');
    }
  };
  const deleteHandler = ()=>{
    setCurrent(String(current).slice(0,-1))
  }
  const allClearHandler = ()=>{
    setCurrent('')
    setPrevious('')
    setOperand('')
  }

  const calculat =()=>{
    let cal;
    switch(operand) {
      case "%":
        cal = String(parseFloat(previous) % parseFloat(current));
        break;
      case "/":
        cal = String(parseFloat(previous) / parseFloat(current));
        break;
      case "+":
        cal = String(parseFloat(previous) + parseFloat(current));
        break;
      case "*":
        cal = String(parseFloat(previous) * parseFloat(current));
        break;
      case "-":
        cal = String(parseFloat(previous) - parseFloat(current));
        break;
        default:
          return;
    }
    setPrevious(cal);
    setOperand('')
    setCurrent('');
  }

  return (
    <div className='calcul'>
      <div className="display">
      {previous}{operand}{current}
      </div>
      <div className="numbox">
        
        <div className="btnrow">
          <button value='AC' onClick={allClearHandler} className='numbtn' >AC</button>
          <button value='C' onClick={deleteHandler} className='numbtn' >C</button>
          <button value='%' onClick={handleOperation} className='numbtn' >%</button>
          <button value='=' onClick={calculat} className='numbtn' >=</button>
        </div>
        <div className="btnrow">
          <button value='1' onClick={HandleNumbers} className='numbtn' >1</button>
          <button value='2' onClick={HandleNumbers} className='numbtn' >2</button>
          <button value='3' onClick={HandleNumbers} className='numbtn' >3</button>
          <button value='*' onClick={handleOperation} className='numbtn' >X</button>
        </div>
        <div className="btnrow">
          <button value='4' onClick={HandleNumbers} className='numbtn' >4</button>
          <button value='5' onClick={HandleNumbers} className='numbtn' >5</button>
          <button value='6' onClick={HandleNumbers} className='numbtn' >6</button>
          <button value='/' onClick={handleOperation} className='numbtn' >/</button>
        </div>
        <div className="btnrow">
          <button value='7' onClick={HandleNumbers} className='numbtn' >7</button>
          <button value='8' onClick={HandleNumbers} className='numbtn' >8</button>
          <button value='9' onClick={HandleNumbers} className='numbtn' >9</button>
          <button value='+' onClick={handleOperation} className='numbtn' >+</button>
        </div>
        <div className="btnrow">
          <button value='.' onClick={HandleNumbers} className='numbtn' >.</button>
          <button value='0' onClick={HandleNumbers} className='numbtn' >0</button>
          <button value='00' onClick={HandleNumbers} className='numbtn' >00</button>
          <button value='-' onClick={handleOperation} className='numbtn' >-</button>
        </div>
      </div>
      
    </div>
  )
}

export default Calculate
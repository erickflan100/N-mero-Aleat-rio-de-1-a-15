import React, { useState } from 'react'
import './App.css'
import Btn from './components/button/index'

function Num() {

  const [number, setNumber] = useState(0)

  let a = document.getElementById('result')

  let b = document.getElementById('randcomplete')

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  function Random () {
    const rand = Math.floor(Math.random() * 15)
    const randcomplete = rand + 1
    if(parseInt(number) === randcomplete){
        a.innerHTML = "Acertou!"
        b.innerHTML = "O número sorteado foi: " + randcomplete
    }else{
        a.innerHTML = "Errou"
        b.innerHTML = "O número sorteado foi: " + randcomplete
    }
  }

  return (
    <>
      <div className='app'><h1>Insira o valor entre 1 e 15 para advinhar o número!</h1></div>
      <div className='label'>
        <label htmlFor='number'>Número: </label>
        <input htmlFor="number" type="number" id='number' name='number' value={number} onChange={onChange}/>
        <br/>
        <Btn random={Random} text="Jogar"/>
        <p id='result'>Escolha um número e aperte em Jogar!</p>
        <p id='randcomplete'>O número sorteado aparecerá aqui.</p> <br/>
        <p>Você tem 1 chance em 15!</p>
      </div>
    </>
  );
}

export default Num;
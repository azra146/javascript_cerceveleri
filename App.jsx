import { useState } from 'react'
import './App.css'

function ProfilDuzenleme(){
  const[isim,setIsim]= useState("");
  const[mail,setMail]= useState("");

  const isimDegisti=(e)=>{setIsim(e.target.value);}
    const mailDegisti=(e)=>{setMail(e.target.value);}

  return(
    <div className='profil-card'>
      <h2>Profil Düzenleme</h2>

      
      <div className='input'>
      <p>İsim:</p>
      <input value={isim}
      onChange={isimDegisti}
      placeholder='Lütfen isminizi yazınız...'>
      </input>
      </div> 

      <div className='input'>
      <p>Email:</p>
      <input value={mail}
      onChange={mailDegisti}
      placeholder='Lütfen mailinizi yazınız...'>
      </input>
      </div>

      <div className='onizleme'>
        <h3>ÖNİZLEME</h3>
        <p><strong>İSİM:</strong>{isim || '(boş)'}</p>
        <p><strong>EMAİL:</strong>{mail || '(boş)'}</p>
      </div>
      </div>

);
}

export default ProfilDuzenleme;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Baslik(){
  return(
    <>
    <h2>"İstanbul Gelişim Üniversitesi"</h2>
    </>
  )
}

function KisiKarti(){
  const ad="Efe Çetinkaya";
  const programi="Ön Yüz Yazılım Geliştirme";
  const donem=2;
   return(
    <>
    <p>Adı: {ad}</p>
    <p>Programı: {programi}</p>
    <p>Dönem: {donem} .Dönem</p>
    </>
  )
}

function AltBilgi(){
  return(
    <>
    <p>2026- Tüm hakları saklıdır.</p>
    </>
  )
}

function App(){
  return(
    <>
    <Baslik/>
    <KisiKarti/>
    <AltBilgi/>
    </>
  );
}
export default App;

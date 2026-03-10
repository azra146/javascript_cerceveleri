import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
    <>
    <h1>Benim Sitem</h1>
    <nav>
      <a href='#'>Ana Sayfa | </a>
      <a href='#'> Hakkımda |</a>
      <a href='#'> İletişim </a>
    </nav>
    </>
  );
}

function Main(){
  return(
    <>
    <h2>Hoş Geldiniz!</h2>
    <p>Bu benim React ile yaptığım ilk çok bileşenli sayfa.</p>
    <KartAlani/>
    </>
  );
}

function KartAlani(){
  return(
    <div className='kart-alani'>
      <Kart baslik="HTML" aciklama="Yapıyı Oluşturur."/>
      <Kart baslik="CSS" aciklama="Görünümü Belirler ."/>
      <Kart baslik="JavaScript" aciklama="Etkileşimi ekler ."/>
    </div>
  );
}

  function Kart(props){
    return(
      <div className='Kart'>
        <h3>{props.baslik}</h3>
        <p>{props.aciklama}</p>
      </div>
    );
}

function Footer(){
  return(
    <>
    <p>2026-İstanbul Gelişim Üniversitesi - Tüm Hakları Saklıdır.</p>
    </>
  );
}

function App(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}
export default App;
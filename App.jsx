import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Header(){
  return(
    <header style={{backgroundColor:"blue",
      color:"white", 
      padding:"16px 32px",
    }}>
    <h1 style={{color:"white",}}>Kitap Köşesi</h1>
    <nav style={{marginTop:"8"}}>
      <a href='#' style={{color:"white",}}>Ana Sayfa | </a>
      <a href='#' style={{color:"white",}}> Kitaplar |</a>
      <a href='#' style={{color:"white",}}> İletişim </a>
    </nav>
   </header>
  );
}

function Main(){
  return(
    <main style={{margin:"82px", textAlign:"center",}}>
    <h2>Öne Çıkan Kitaplar</h2>
    <p style={{color:"green",}}>Bu ay en çok okunan kitaplar </p>
    <KitapAlani/>
    </main>
  );
}

function KitapAlani(){
  return(
    <div style={{display:"flex", gap:25, justifyContent:"center"}}>
      <Kitap baslik="Korkuyu Beklerken" yazar="Oğuz Atay"/>
      <Kitap baslik="Çalıkuşu " yazar="Reşat Nuri Güntekin "/>
      <Kitap baslik="Sergüzeşt " yazar="Sami Paşazade Sezai "/>
    </div>
  );
}

function Kitap({baslik, yazar}){
  return(
    <div style={{padding:20, width:200}}>
      <h3 style={{color:"red"}}>{baslik}</h3>
      <p style={{color:"gray"}}>{yazar}</p>
    </div>
  );
}

function Footer(){
  return(
    <p style={{background:"gray", color:"white"}}>2026 - Kitap Köşesi - Tüm Hakları Saklıdır.</p>
  );
}

function App(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
 export default App;
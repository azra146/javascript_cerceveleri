import { useState } from 'react'
import './App.css'

function Isim(){
  return(
    <h1 className='selamlama'>Merhaba, <span>Azra Uçar</span> </h1>
  );
}

const Altbilgi=()=>{
  return(
    <footer className='altbilgi'><p>2026 - Ön Yüz Yazılım Geliştirme</p></footer>
  );
}

function Sayac(){
  const[sayi,setSayi]=useState(0);
  return(
    <div className='sayac_card'><p className='sayac-label'>Sayaç</p>
    <h1 className={
      `sayac-deger ${
      sayi > 0 ? 'pozitif': sayi < 0 ? 'negatif':0}`}>{sayi}</h1>

      <div>
        <button className='btn artir' onClick={()=>setSayi(sayi+1)}>+Artır</button>
        <button className='btn azalt' onClick={()=>setSayi(sayi-1)}>-Azalt</button>
        <button className='btn sifirla' onClick={()=>setSayi(0)}>Sıfırla</button>
      </div>
    </div>
  );
}

function App(){
  return(
    <div className='app'>
      <Isim/>
      <Sayac/>
      <Altbilgi/>
      </div>
  );
}
export default App; 

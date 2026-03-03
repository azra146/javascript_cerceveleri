import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function KullaniciBilgisi(){
  const ad="Çisem";
const mail="cyasar@gmail.com";
  return(
    <>
    <h2>{ad}</h2>
    <p>{mail}</p>
    </>
  )
}

function SepetBilgisi(){
const urun1="Kablosuz Kulaklık";
const fiyat1=299.99;
const kdv1=fiyat1*20/100;
const stok1=true;

const urun2="Bilgisayar";
const fiyat2=1099.99;
const kdv2=fiyat2*20/100;
const stok2=true;
  return(
    <>
    <h2>{urun1}</h2>
    <p>Fiyat: {fiyat1} TL</p>
    <p>KDV Dahil: {kdv1+fiyat1} TL</p>
    <p>{stok1}</p>
    {stok1 ? <p>Stoktakta Var</p>: <p>Stokta Yok</p>}

    <h2>{urun2}</h2>
    <p>Fiyat: {fiyat2} TL</p>
    <p>KDV Dahil: {kdv2+fiyat2} TL</p>
    {stok2 ? <p>Stoktakta Var</p>: <p>Stokta Yok</p>}
    </>
  )
}
function App(){
  return(
    <>
    <h1>Kullanıcı Sepeti</h1>
    <KullaniciBilgisi/>
    <SepetBilgisi/>
    </>
  );
}
export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ogrenciAd1="Çisem Yaşar";
const bolum1="Yazılım Mühendisliği";
const donumSayisi1="1";

const ogrenciAd2="Tuğba Saray";
const bolum2="Bilgisayar Mühendisliği";
const donumSayisi2="6";

function ProfilKarti(){
  return(
  <>
    <h1>{ogrenciAd1}</h1>
    <p>{bolum1}</p>
    <p>Dönem: {donumSayisi1}.dönem</p>
    <p>Mezuniyet tahmini:{8-donumSayisi1} dönem kaldı.</p>

    <h1>{ogrenciAd2}</h1>
    <p>{bolum2}</p>
    <p>Dönem: {donumSayisi2}.dönem</p>
    <p>Mezuniyet tahmini:{8-donumSayisi2} dönem kaldı.</p>
  </>
  )
}
export default ProfilKarti;
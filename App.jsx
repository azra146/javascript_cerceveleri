import { useState } from 'react'
import './App.css'

function Meyveler(){
  const meyve=['Elma','Armut','Muz','Çilek','Erik','Kavun'];
  return(
    <>
    <h2>Meyve Listesi</h2>
    <ul>
    {meyve.map((meyvelerin,index)=>(           /*MAP DİZİ İÇİNDE DÖNEMK İÇİN*/
      <li key={index}>{meyvelerin}</li>
    ))}
    </ul>
    <p>Toplam: {meyve.length}</p>  
    </>
  );
}

function OgrenciListesi(){
  const ogrenciler=[
    {id:1, isim:'Çisem', puan:85},
    {id:2, isim:'Tuğba', puan:55},
    {id:3, isim:'Efe', puan:95},
  ];
  return(
    <>
    <h3>Öğrenci Listesi</h3>
    <table>
      <tr>
        <th>ID</th>
        <th>ADI</th>
        <th>PUANI</th>
      </tr>
      {ogrenciler.map(ogr=>(
      <tr>
      <td>{ogr.id}</td>
      <td>{ogr.isim}</td>
      <td>{ogr.puan}</td>
      <td>{ogr.puan>=80?'Başarılı':'Çalış'}</td>
      </tr>
      ))}
    </table>
    </>
  );
}

function App(){
  return(
  <>
  <Meyveler/>
  <OgrenciListesi/>
  </>
)}

export default App;
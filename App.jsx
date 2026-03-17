import  React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

class Selamlama extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:"green", borderRadius:16, width:"100%" , height:500, marginTop:15}}>
      <h1 style={{padding:75,color:"white", marginBottom:5}}> Merhaba, Sınıf Bileşenleri</h1>
      <p style={{color:"white", padding:30}}>Bu bir sınıf bileşenidir.</p>

      <div style={{display:"flex", gap:10, justifyContent:"center"}}>
      <span style={{color:"white",  backgroundColor:"gray", borderRadius:16, padding:10}}> React.Component</span>
      <span style={{color:"white",  backgroundColor:"gray", borderRadius:16, padding:10}}> render()</span>
      <span style={{color:"white",  backgroundColor:"gray", borderRadius:16, padding:10}}> export default</span>

      </div>
      </div>
    );
  }
}
export default Selamlama;
  

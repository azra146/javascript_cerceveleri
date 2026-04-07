import { useState } from 'react'
import './App.css'

function OlayOrnekleri(){
  const[tiklamaSayisi,setTiklamasayisi] = useState(0);
  const[metin,setMetin]=useState("");
  const[fareUstunde,setFareUstunde]=useState(false);

  const tiklaHandler=()=>{setTiklamasayisi(tiklamaSayisi+1);}
  const metinDegisti=(e)=>{setMetin(e.target.value);}

  return(

<div>
<h2>OLAY ÖRNEKLERİ</h2>
<button onClick={tiklaHandler}>
  Tıklandı: {tiklamaSayisi}.kez
</button>

<div>
<input value={metin}
onChange={metinDegisti}
placeholder='Lütfen bir şey yazınız...'/>
<p>Yazdığınız metin: {metin}</p>
<p>Karakter Sayısı:{metin.length}</p>
</div>

<div 
onMouseEnter={()=>setFareUstunde(true)}
onMouseLeave={()=>setFareUstunde(false)}
style={{
  backgroundColor:fareUstunde? 'red' : 'blue' ,
  padding:'20px'
}}>

{fareUstunde ? 'Fare üzerinde!' : 'Fare üzerinde Değil'}
</div>
</div>
  );
}

export default OlayOrnekleri;
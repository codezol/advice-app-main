import { useEffect,useState } from "react";
import axios from "axios";
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'

const AdviceContainer = () => {
let randomInedex = Math.floor(Math.random() * 1000);
const [advice, setAdvice] = useState("");
const getAdvice = async() => {
    
    const response = await axios.get('https://type.fit/api/quotes')
    const advice = await response.data[randomInedex].text;
    // console.log(advice)
    setAdvice(advice)
}

useEffect(() => {
    getAdvice();
   }, []);



   return (
    <div className='card'>
    <p>ADVICE #{randomInedex}</p>
    <h2>“{advice}”</h2>
    <img src={dividerDesktop} className="divider-desktop" alt="divider"  />
    <img src={dividerMobile} className="divider-mobile" alt="divider" />
    <div className="dice" onClick={getAdvice}>
    <img src={dice} alt="dice"   />
    </div>
</div>
  )
}
 
export default AdviceContainer;
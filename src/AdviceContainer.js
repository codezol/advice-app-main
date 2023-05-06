import { useEffect,useState } from "react";
import axios from "axios";
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'

const AdviceContainer = () => {
// const URL = "https://api.adviceslip.com/advice"
const [advice, setAdvice] = useState("");
const getAdvice = async() => {
    const response = await axios.get('https://api.quotable.io/random')
    const advice = await response.data;
    console.log(advice)
    setAdvice(advice)
}

useEffect(() => {
    getAdvice();
   }, []);



   return (
    <div className='card'>
    <p>ADVICE #{advice.length}</p>
    <h2>“{advice.content}”</h2>
    <img src={dividerDesktop} className="divider-desktop" alt="divider"  />
    <img src={dividerMobile} className="divider-mobile" alt="divider" />
    <div className="dice" onClick={getAdvice}>
    <img src={dice} alt="dice"   />
    </div>
</div>
  )
}
 
export default AdviceContainer;
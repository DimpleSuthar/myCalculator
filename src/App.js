
import './App.css';
import { useState } from 'react';
import Wrapper from './components/Wrapper'
import Screen from './components/Screen';

function App() {
  const [display,setDisplay]=useState(0);
  const [operator,setOperator]=useState(null);
  const [operand,setOperand]=useState(null)

  function handleNumber(value){
    if(display==='0'){
      setDisplay(value)
    }else{
      setDisplay(display+value)
    }
  }
  function handleOperator(operation){
    setOperand(display);
    setOperator(operation);
    setDisplay('0')
  }
  function calculate(){
    var num1=parseFloat(operand)
    var num2=parseFloat(display)
switch (operator) {
  case '+':
    setDisplay(num1+ num2)
    break;
  case '-':
    setDisplay(num1-num2)
    break;
  case '*':
    setDisplay(num1*num2)
    break;
    case '/':
      setDisplay(num1/num2)
      break;
    case '%':
      setDisplay(num1%num2)
      break;
  default:setDisplay(null)
}
setOperand(null);
setOperator(null);
  }
  return (
    
      
        <Wrapper>
          <Screen value={display} />
    
     <button onClick={()=>setDisplay('0')} className="grid-item">AC</button>
     <button  onClick={()=>handleNumber(".")} className='grid-item' >.</button>
     <button  onClick={calculate} type="submit" className='grid-item item-2 ' >=</button>
     <button onClick={()=>handleNumber("1")} className='grid-item ' value="1" >1</button>
     <button  onClick={()=>handleNumber("2")} className='grid-item' >2</button>
     <button  onClick={()=>handleNumber("3")} className='grid-item' >3</button>
     <button onClick={()=>handleOperator("/")} className='grid-item ' >/</button>
     <button  onClick={()=>handleNumber("4")} className='grid-item' >4</button>
     <button  onClick={()=>handleNumber("5")} className='grid-item' >5</button>
     <button  onClick={()=>handleNumber("6")} className='grid-item' >6</button>
     <button  onClick={()=>handleOperator("-")} className='grid-item '>-</button>
     <button  onClick={()=>handleNumber("7")} className='grid-item' >7</button>
     <button  onClick={()=>handleNumber("8")} className='grid-item' >8</button>
     <button  onClick={()=>handleNumber("9")} className='grid-item' >9</button>
     <button onClick={()=>handleOperator("*")}  className='grid-item ' >x</button >
     <button  onClick={()=>handleNumber("0")} className='grid-item' >0</button>
     <button  onClick={()=>handleOperator("+")} className='grid-item item-3' >+</button >
     <button  onClick={()=>handleOperator("%")} className='grid-item ' >%</button >
     </Wrapper>
   
  );
}

export default App;

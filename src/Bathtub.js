import './App.css';
import { useState, useRef } from "react";

function Bathtub() {
  const [count, setCount] = useState(0);

  const timer = useRef();

  function FillBath(type){
    if(type === 'up'){
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        setCount(count => count+1);
      }, 2000);
    }
    else if(type == 'down'){
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        setCount(count => count - 1);
      }, 2000);
    }
  }

  if(count > 4 || count < 1){
    clearInterval(timer.current);
  }
  
  let indents = [];
  const myStyle = {'width':'100px', 'height':'20px'};

  for (let i = 0; i < 5; i++) {
    if(i < 5-count)
      indents.push(<div key={"level"+i} style={{...myStyle, 'backgroundColor':'white'}}><span></span></div>);
    else
      indents.push((<div key={"level"+i} style={{...myStyle, 'backgroundColor':'blue'}}><span></span></div>));
  }
  return (
    <>
      <div style={{'display':'flex', 'justifyItems':'center'}} >
        <div key="bathtub" style={{'backgroundColor':'yellow', 'border':'3'}}>
          {indents}
        </div>
        <div>
          {count}
        </div>
        <div>
          <input value="Up" type="button" onClick={()=>FillBath('up')}></input>
          <input value="Down" type="button" onClick={()=>FillBath('down')}></input>
        </div>
      </div>
    </>
  );
}

export default Bathtub;

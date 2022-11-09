import { useState } from "react";
 function ToggleButton({statusIndex}) {
    
    console.log({statusIndex})
    const [myIndex, setMyIndex] = useState(statusIndex);
    const classNames = ["btn"];
    const text = myIndex === 0 ? "暗" : "亮";

    classNames.push(statusIndex===0 ? 'btn-primary' : 'btn-outline-primary');

  return (
    <>
        <button type="button" 
        className={classNames.join(' ')}
        onClick={()=>setMyIndex(myIndex ===0?1:0)}
        > {text}</button>
    </>
  )
}

ToggleButton.defaultProps = {
    statusIndex: 0,
}

export default ToggleButton
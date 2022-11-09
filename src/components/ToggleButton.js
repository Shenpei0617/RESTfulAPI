import { useState } from "react";

 function ToggleButton({statusIndex ,texts}) {
    console.log({statusIndex})
    const [myIndex, setMyIndex] = useState(statusIndex);
    const classNames = ["btn"];
    //const text = myIndex === 0 ? "暗" : "亮";

    classNames.push(!myIndex ? 'btn-primary' : 'btn-outline-primary');

  return (
    <>
        <button 
        type="button" 
        className={classNames.join(' ')}
        onClick={()=>setMyIndex(myIndex ===0?1:0)}
        > {texts [myIndex]}
        </button>
    </>
  )
}

ToggleButton.defaultProps = {
    statusIndex: 0,
    texts: ["關", "開"],
}

export default ToggleButton
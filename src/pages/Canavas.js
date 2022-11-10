import { useEffect, useRef ,useState} from "react";
import{productData}from "./../data/product-data"

function Canvas1() {

    const cRef = useRef()
    

    useEffect(()=>{
        const ctx = cRef.current.getContext('2d');
       

        const img = new Image();
        img.onload=()=>{
            ctx.drawImage(img, 0, 0);
        }
        img.src = './images/dish.jpeg';
    },[])

    return (
      <div className="container">
      <div className="row">
        <div className="col">
            {productData.map((el)=>{
                return <img src={"images/"+el.img} alt={el.name} key={el.id} width="150"/>
            })}
        </div>
      </div>
        <canvas
        ref={cRef}
          width="700"
          height="700"
        //   style={{ border: "1px solid blue" }}
        ></canvas>
      </div>
    );
  }
  export default  Canvas1
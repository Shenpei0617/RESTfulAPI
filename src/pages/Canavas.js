import { useEffect, useRef ,useState} from "react";
import{productData}from "./../data/product-data"

function Canvas1() {

    const cRef = useRef()
    const [cart,setCart ] = useState([]);
    
    const cartAdd=(pid)=>{
        let p =productData.find((el)=>{return el.id===pid})
        if(p){
            p={...p};
            p.tid =Date.now();
            const CurrentCart=[...cart,p];
            setCart(CurrentCart);
            console.log(CurrentCart);
        }
    }
    const cartRemove = (tid) => {
        const newCart = cart.filter((el)=>el.tid !== tid);
        setCart(newCart);
    };

     const getImageFromPath=(path)=>{
            return new Promise((resolve,reject)=>{
                const img = new Image();
                img.onload = () => {
                    resolve(img);
                  };
                img.src=path;
            });
        };
            const renderBG = async()=>{
                const ctx = cRef.current.getContext("2d");
                const img = await getImageFromPath("/images/dish.jpeg");
                ctx.drawImage(img, 0, 0);
              };
              const renderCart = async ()=>{
            
              };
            

   
        useEffect(() => {
            (async ()=>{
                await renderBG();
                await renderCart();
            })();
          }, []);
        
   

    return (
      <div className="container">
      <div className="row">
        <div className="col">
            {productData.map((el)=>{
                return (
                    <img 
                    src={"images/"+el.img} 
                    alt={el.name} key={el.id} 
                    width="150" 
                    onClick={() => {
                  cartAdd(el.id);
                }}/>
                )
            })}
            </div>
            </div>
            <div className="row">
        <div className="col">
          {cart.map((el) => {
            return (
              <img
                src={"/images/" + el.img}
                alt={el.name}
                key={el.tid}
                width="50"
                onClick={() => {
                    cartRemove(el.tid);
                }}
              />
            );
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
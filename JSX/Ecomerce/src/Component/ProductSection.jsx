import { useState } from "react";
import Products from "./product";
import Footer from "./Footer";
import { productList } from "../../utils/constaint";

function ProductSection (){

  const [topRatedActor, setTopRatedActor] = useState(productList);   //Top-Rated-Actor
  
  const showTopRated = () =>{
    const filteredTopRatedActor = productList.filter((product)=> product.rating >= 4)
    setTopRatedActor(filteredTopRatedActor);
  }

  const showAll = () =>{
     setTopRatedActor(productList);
  }
    return (
      <div>
         <div className="toprate">
           <button onClick={showTopRated}>Top-Rate</button>
           <button onClick={showAll}>All-Rate</button>
         </div>
        <div className="product-section">
          {
             topRatedActor.map((product)=>{
               return (
                  <Products key={product.id} productDetails={product}/>
               );
             })
          }
        </div>
      {/* <Footer /> */}
      </div>
    );
}

export default ProductSection;

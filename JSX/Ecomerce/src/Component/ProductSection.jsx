import Products from "./product";
import { productList } from "../../utils/constaint";

function ProductSection (){
    return (
        <div className="product-section">
          {
             productList.map((product)=>{
               return (
                  <Products key={product.id} productDetails={product}/>
               );
             })
          }
        </div>
    );
}

export default ProductSection;
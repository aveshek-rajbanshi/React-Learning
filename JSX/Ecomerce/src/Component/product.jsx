function Products ({productDetails}){
  const {title, profession, country, profileImg} = productDetails;
  console.log(title);
    return (
       <div className="product-container">
       <div className="img-container">
         <img className="img-box" src={profileImg}></img>
       </div>
         <div className="product-details">
            <h3>{title}</h3>
            <h5>{profession}</h5>
            <h5>{country}</h5>
         </div>

       </div>
    );
}

export default Products;
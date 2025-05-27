const Card =(probs)=>{
    const {FoodName, resName, price, rating,img} = probs;
    return(
    <div className="card">
       <img alt="Food-img" className="f-img" src={img}/>
       <div className="card-content">
         <div className="cmpnay"> 
         <h4>{FoodName}</h4>
         <h4>{resName}</h4>
         </div>
         <div className="customer">
         <h6>{price}</h6>
         <h6>{rating}</h6>
         </div>
       </div>
    </div>
    );
 };


 export default Card;
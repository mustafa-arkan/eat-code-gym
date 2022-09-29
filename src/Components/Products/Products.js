import React from 'react';
import './Products.css'




const Products = ({card,handleAddToCart}) => {
// const{card,handleAddToCart}=props
const {img,name,about,age,time}=card



    return (
        <div className='card'>
            
<img src={img} alt="" className="src" />

<div className='card-info'>

<p>Name: {name}</p>
<p>{about}</p>

<p>For Age: {age}</p>
<p>Time: {time}</p>

</div>

<button onClick={()=>handleAddToCart(card)} className='btn-list'>
            <p>Add to List</p>
            </button>





        </div>




    );
};

export default Products;
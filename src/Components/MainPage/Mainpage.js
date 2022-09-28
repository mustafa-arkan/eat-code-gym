import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

import './Mainpage.css'





const Mainpage = () => {

const [cards,setCards]=useState([])

useEffect(()=>{


fetch('card.json')
.then(res=>res.json())
.then(data=>setCards(data))


} ,[])



    return (
        <div className='card-container'>
            
<div className='left-side'>


{


cards.map(card=><Products     
key={card.id}

card={card}

></Products>)









}





</div>
<div className='right-side'>

<h2>Profile</h2>


</div>


        </div>
    );
};

export default Mainpage;
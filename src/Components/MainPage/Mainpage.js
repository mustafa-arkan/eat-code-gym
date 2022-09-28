import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

import logo1 from '../../Images/logo1.jpeg'

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

<img src={logo1} alt="" className="src" />
<h3>Md. Mustafa Arkan</h3>
<p>arkancse@gmail.com</p>
<h3>Add a Break</h3>
<div className='btn-break'>
<button>10s</button>
<button>20s</button>
<button>30s</button>
<button>40s</button>
<button>50s</button>

</div>


</div>


        </div>
    );
};

export default Mainpage;
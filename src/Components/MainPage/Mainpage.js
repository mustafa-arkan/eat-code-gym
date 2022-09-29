import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';



import './Mainpage.css'
import Calculation from '../Calculation/Calculation';





const Mainpage = () => {

const [cards,setCards]=useState([])

const[calc,setCalc]=useState([])

useEffect(()=>{


fetch('card.json')
.then(res=>res.json())
.then(data=>setCards(data))


} ,[])

const handleAddToCart=(card)=>{

    console.log(card)
    const newCalc=[...calc,card]

    setCalc(newCalc)
   
}

    return (
        <div className='card-container'>
            
<div className='left-side'>


{


cards.map(card=><Products     
key={card.id}

card={card}
handleAddToCart={handleAddToCart}

></Products>)


}

</div>





<div className='right-side' >

<Calculation></Calculation>








</div>

<div className='question'>
    <h4>Frequently Asked Question about React.</h4>

<h3>How React works?</h3>
<p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

<h3>Props vs State?</h3>
<p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>

<h3>Apart from fetch api data what can useEffect do? </h3>
<p>The dependency array in useEffect lets you specify the conditions to trigger it. If you provide useEffect an empty dependency array, it'll run exactly once.</p>


</div>


        </div>
    );
};

export default Mainpage;
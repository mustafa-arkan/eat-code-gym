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
<h3 className='break'>Add a Break</h3>


<div className='btn-break'>
<button>10s</button>
<button>20s</button>
<button>30s</button>
<button>40s</button>


</div>

<div className='exercise'>
<h3>Exercise Details</h3>

<p>Exercise Time: <span>0</span> sec</p>


<p>Break Time: <span>0</span> sec</p>



</div>
<button className='btn-act'>
            <p>Activity Completed</p>
            </button>


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
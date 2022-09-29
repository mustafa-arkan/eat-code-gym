

import { useState } from 'react';
import logo1 from '../../Images/logo1.jpeg'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  


import './Calculation.css'





const Calculation = (props) => {


    const [breakTimes,setBreakTimes]=useState([])

const breakTimeShow=(e)=>{
    
const breakTime=e.target.innerHTML 



setBreakTimes(breakTime)
localStorage.setItem("Break Time",breakTime)


}




    





const {calc}=props

let total=0

for(const card of calc){


    total=total+card.time
}




const diffToast=()=>{
    toast("Woow!You Successfully completed your daily activity!")
}




    return (
        
        <div>
           
            <img src={logo1} alt="" className="src" />
<h3>Md. Mustafa Arkan</h3>
<p>arkancse@gmail.com</p>
<h3 className='break'>Add a Break</h3>




<ul className='btn-break'>

    <li onClick={breakTimeShow}>
        <a className='nav-link' >10s</a>
       
    </li>
    <li onClick={breakTimeShow}>
        <a className='nav-link' >20s</a>
       
    </li>
    <li onClick={breakTimeShow}>
        <a className='nav-link' >30s</a>
       
    </li>
    <li onClick={breakTimeShow}>
        <a className='nav-link'>40s</a>
       
    </li>


</ul>

<div className='exercise'>
<h3>Exercise Details</h3>

<p>Exercise Time:{total} sec </p>


<p>Break Time:{breakTimes} </p>



</div>

<div>
        <button  className='btn-act' onClick={diffToast} >Activity Completed </button>
        <ToastContainer />
        
       
      </div>


        </div>
        
        
    );
};

export default Calculation;
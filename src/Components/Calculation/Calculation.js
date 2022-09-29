import React from 'react';
import logo1 from '../../Images/logo1.jpeg'

  


import './Calculation.css'




const Calculation = (props) => {

const {calc}=props

let total=0

for(const card of calc){


    total=total+card.time
}









    return (
        
        <div>
            <p>Selected:{calc.length}</p>
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

<p>Exercise Time:{total} sec </p>


<p>Break Time:</p>



</div>

<div>
        <button >Activity Completed </button>
       
      </div>


        </div>
        
    );
};

export default Calculation;
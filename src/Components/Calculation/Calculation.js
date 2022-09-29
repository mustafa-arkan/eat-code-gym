import React from 'react';
import logo1 from '../../Images/'

import './Calculation.css'




const Calculation = () => {



    return (
        <div>
            
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
    );
};

export default Calculation;
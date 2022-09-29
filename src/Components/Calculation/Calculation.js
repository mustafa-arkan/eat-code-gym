
import { useState } from 'react';
import logo1 from '../../Images/logo1.jpeg'

  


import './Calculation.css'




const Calculation = (props) => {

    const [brtime,setBrtime]=useState(0)

    


    const breakTime=()=>{

const newBrtime=brtime + 10
localStorage.setItem("Break Time",10)

setBrtime(newBrtime)

    }

    const breaktwoTime=()=>{

        const newBrtime=brtime + 20
        localStorage.setItem("Break Time",20)
        
        setBrtime(newBrtime)
        
        
            }
            
            const breakthreeTime=()=>{

                const newBrtime=brtime + 30
                localStorage.setItem("Break Time",30)
                
                setBrtime(newBrtime)
                
                
                    }
                    const breakfourTime=()=>{

                        const newBrtime=brtime + 40
                        localStorage.setItem("Break Time",40)
                        
                        setBrtime(newBrtime)
                        
                        
                            }


                            

const addToCart=(time)=>{

console.log('added')


}





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
<button  onClick={breakTime} >10s</button>
<button onClick={breaktwoTime} >20s</button>
<button onClick={breakthreeTime}>30s</button>
<button onClick={breakfourTime}>40s</button>


</div>

<div className='exercise'>
<h3>Exercise Details</h3>

<p>Exercise Time:{total} sec </p>


<p>Break Time:{brtime}</p>



</div>

<div>
        <button >Activity Completed </button>
       
      </div>


        </div>
        
    );
};

export default Calculation;
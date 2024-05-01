import { useState } from "react";


const Log = () => {
  const [percent,setPercent] = useState(100);
  return (
    <div className="bg-red-600 h-10">
       <p>February</p> 
      

       <div className="bg-yellow-600 mt-24 text-center">
        <p>Food</p>
      
        
    </div>
    <div className="border-solid border-l-violet-950 rounded-md h-10 w- w-full m-10 ">
        <div className="bg-orange-500 h-10 w-100 ">

        </div>


       </div>
    <div className="bg-orange-600 mt-24 text-center">
        <p>fuel</p>

    </div>
    <div className="border-solid border-l-violet-950 rounded-md h-10 w- w-full m-10 ">
        <div className="bg-red-500 h-10 w-20 ">

        </div>


       </div>
    
       
    </div>
    
  )
}
export default Log;
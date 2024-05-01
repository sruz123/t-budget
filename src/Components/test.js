import { useEffect, useState } from "react";



const Test = () => {

    const [userData,setUserData]= useState([]);
    useEffect (() => {
        getData();
    },[])

    async function getData() {
        let data=  await fetch("http://localhost:3001")
        data = await data.json()
        setUserData (data);
    }


  return (
    <div>
   {

    userData.map((dataItem)=>{
        return <div>{"My name is "+ dataItem.name +", My age is " + dataItem.age }</div>

    })

   }
    </div>
  )
}

export default Test;
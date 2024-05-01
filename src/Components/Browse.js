import { useEffect, useState } from "react";
import food from '../icons/food.png'
import fuel from '../icons/fuel.png'
import wallet from '../icons/wallet.png'
import expense from '../icons/spending.png'
import income from '../icons/salary.png'



const monthOnClick = (month, setMonthSelected) => {
  setMonthSelected(month);
  console.log("hello");
};

const getImageForCategory=(category)=>{
  const imgDict = {
    fuel:fuel,
    food:food
  }
  return imgDict[category] || "https://static.vecteezy.com/system/resources/previews/006/059/910/original/dollar-icon-american-currency-symbol-illustration-usd-coin-free-vector.jpg"
}

const getMonthData = (monthSetter) => {
  const data = ["January", "February", "March"];
  
  monthSetter(data);
};
const toggleDropDown = () => {
  document.getElementById("dropDown").classList.toggle("hidden");
};

const Browse = () => {
  const [monthData, setMonthdata] = useState({
    "feb-25": [
      {
        category: "food",
        amount: "100",
      },
      {
        category: "fuel",
        amount: "150",
      },
    ],
    "feb-26": [
      {
        category: "food",
        amount: "100",
      },
      {
        category: "fuel",
        amount: "150",
      },
    ],
  });

  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("January");

  useEffect(() => {
    getMonthData(setMonths);
  }, []);
  return (
    <div>
      <div
        className=" w-50 h-9 fixed 
    inset-x-0 
    bottom-0"
      >
      </div>
      <div className="topNav w-50 h-9">
        <div className="flex flex-col gap-4 absolute py-2 font-bold left-10 top-0 w-20">
          <div className="flex w-28">
            <p onClick={toggleDropDown}>{monthSelected}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div id="dropDown" className=" hidden pt-0 w-32 h-28 pl-2 shadow-md">
            <ul>
              {months.map((month) => {
                return (
                  <li
                    data-monthname={month}
                    onClick={(e) => {
                      monthOnClick(
                        e.target.dataset.monthname,
                        setMonthSelected
                      );
                    }}
                    className="shadow-md"
                  >
                    {month}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-40 w-full mb-3 flex justify-center items-center">
      <div className='w-96 h-36 bg-red-300 flex justify-between items-center rounded-md p-4'>
        <div>
        <h1 className='font-bold'>Balance</h1> 
        <h2 className='font-bold'>$1892</h2>
        </div>
        <div>
          <img src={wallet} className='w-28 h-28'
           alt="category logo"></img>
        </div>
        </div>
      </div>
      <div className=" w-svw h-24 flex  ">
        <div className="bg-pink-600 w-1/2 h-24 mr-1 flex justify-center  rounded-md items-center">
        <img src={income} className='w-24 h-24'
           alt="category logo"></img>
        </div>
        <div className="bg-blue-600 w-1/2 h-24  ml-1 flex justify-center  rounded-md items-center">
        <img src={expense} className='w-24 h-24'
           alt="category logo"></img>
        </div>
      </div>
      {Object.keys(monthData).map((item) => {
        return (
          <div>
            <h6 className="text-center uppercase font-bold">{item}</h6>
            {monthData[item].map((dataItem) => {
              return (
                <div className="flex justify-center align-center items-center bg-red-50">
                  {
                  <img
                 className="w-6 h-6"
                 src={getImageForCategory(dataItem.category)}
                 alt="category logo"
               ></img>
                  }
                 <p className="m-2.5 capitalize w-28">{dataItem.category}</p>
                 <p className="mx-3.5 w-24">${dataItem.amount}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Browse;

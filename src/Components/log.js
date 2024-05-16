import { useEffect,useState } from "react";

const toggleDropDown = () => {
  document.getElementById("dropDown").classList.toggle("hidden");
};
const monthOnClick = (month, setMonthSelected) => {
  setMonthSelected(month);
  console.log("hello");
};

const getSpendData = (setter) => {
  const data = 
   [
        {
          category:"food",
          spent: 3000,
          budget:10000
        },
        {
          category:"fuel",
          spent: 4000,
          budget:10000
        }
    ]
  
  setter(data);
};

const Log = () => {
  const [percent,setPercent] = useState(100);
  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("January");
  const [spendData,setSpendData] = useState([]);
  useEffect(() => {
     getSpendData(setSpendData);
  }, []);
  return (
    <div>
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
      <div>
      {spendData.map(spendItem=>{
        return <div className="bg-gray-200" style={{marginLeft:"10px", marginRight:"10px"}}>
          <div className=" bg-red-600 flex" style={{width: spendItem.spent/spendItem.budget * 100 + "%", borderRadius:"0 10px 10px 0", marginTop:"20px" }}>
            <p>{spendItem.spent + '/' + spendItem.budget}</p>
            <p className = "capitalize" style={{marginLeft:"10px"}} >{spendItem.category}</p>
          </div>
          </div>
      })}
  </div>
    </div>
  );
}
export default Log;
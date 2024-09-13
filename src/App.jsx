import { useState } from "react"

function App() {

  const [amount , setAmount] = useState(0);
  const [type , setType] = useState("Income")

  return (
    <>
      <div className="my-36">
        <div className="my-14">
          <h1 className="text-black text-center text-4xl">Expence Managment System</h1>
        </div>
        <div className="flex justify-center gap-1 ">
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl">Total Expense</p>
            <p className="text-red-700 font-semibold">00.00</p>
          </div>
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl"> Total Income</p>
            <p className="text-green-400 font-semibold">00.00</p>
          </div>
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl">Balance</p>
            <p className="text-yellow-500 font-semibold">00.00</p>
          </div>
        </div>
        <br />
        <div className="flex justify-center gap-3">
          <input
            className=" p-2 w-96 bg-gray-100 rounded-2xl text-lg outline-none"
            type="number"
            value={amount}
          />
          <select
           value={type}
           onChange={(event) => setType(event.target.value)}
           >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <button className="bg-orange-500 p-2 rounded-xl text-white font-semibold">Submit</button>
        </div>
      </div>
    </>

  )
}
export default App






// import { useState } from "react";

// function App() {
//   let [amount, setAmount] = useState(0);
//   let [type, setType] = useState("income");
//   let [transaction, setTransactions] = useState([]);

//   let handleTransactions = () => {
//     console.log("amount=>", amount);
//     console.log("type=>", type);
//     setTransactions([...transaction, { amount, type }]);
//     setAmount(0);
//   };

//   let totalIncome = transaction.reduce((acc, curr)=>{
//     return curr.type == 'income' ? acc + Number(curr.amount) : acc
//   }, 0)

//   let totalExpense = transaction.reduce((acc, curr)=>{
//     return curr.type == 'expense' ? acc + Number(curr.amount) : acc
//   }, 0)

//   let balance = totalIncome - totalExpense

//   let delExpense = (index)=>{

//     let copy = [...transaction]
//     copy.splice(index, 1)
//     setTransactions(copy)

//   }


//   return (
//     <>
//       <h1>Expense Management System</h1>

//       <div>
//         <div style={{display:'flex', justifyContent:'space-around'}}>
//           <div>
//             <p>Total Income</p>
//             <p>{totalIncome}</p>
//           </div>
//           <div>
//             <p>Total Expense</p>
//             <p>{totalExpense}</p>
//           </div>
//           <div>
//             <p>Balance</p>
//             <p>{balance}</p>
//           </div>
//         </div>

//         <input
//           onChange={(e) => setAmount(e.target.value)}
//           value={amount}
//           type="text"
//           name=""
//           id=""
//         />
//         <select
//           onChange={(e) => setType(e.target.value)}
//           value={type}
//           name=""
//           id=""
//         >
//           <option value="income">income</option>
//           <option value="expense">expense</option>
//         </select>
//         <button onClick={handleTransactions}>Submit</button>

//         <div>
//           <ul>
//             {transaction.map((data, index) => {
//               return (
//                 <li key={index}>
//                   {data.amount} {data.type}
//                   <button onClick={()=>delExpense(index)}>Delete</button>
//                   <button>Edit</button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
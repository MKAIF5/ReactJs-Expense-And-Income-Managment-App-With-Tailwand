import { useState } from "react"

function App() {

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transaction , setTransactions] = useState([]);

    let handleTransactions = () => {
    console.log("amount=>", amount);
    console.log("type=>", type);
    setTransactions([...transaction, { amount, type }]);
    setAmount(0);
  };

  let totalIncome = transaction.reduce((acc, curr)=>{
    return curr.type == 'income' ? acc + Number(curr.amount) : acc
  }, 0)
 
  let totalExpense = transaction.reduce((acc, curr)=>{
    return curr.type == 'expense' ? acc + Number(curr.amount) : acc
  }, 0)

  let balance = totalIncome - totalExpense


  return (

    <>
      <div className="my-36">
        <div className="my-14">
          <h1 className="text-black text-center text-4xl">Expence Managment System</h1>
        </div>
        <div className="flex justify-center gap-1 ">
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl"> Total Income</p>
            <p className="text-green-400 font-semibold">{totalIncome}</p>
          </div>
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl">Total Expense</p>
            <p className="text-red-700 font-semibold">{totalExpense}</p>
          </div>
          <div className="w-44 text-center p-6 border-solid border border-gray-300">
            <p className="font-medium text-xl">Balance</p>
            <p className="text-yellow-500 font-semibold">{balance}</p>
          </div>
        </div>
        <br />
        <div className="flex justify-center gap-3">
          <input
            onChange={(event) => setAmount(event.target.value)}
            className=" p-2 w-96 bg-gray-200 rounded-2xl text-lg outline-none"
            type="number"
            value={amount}
          />
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button
            className="bg-orange-500 p-2 rounded-xl text-white font-semibold"
            onClick={handleTransactions}> Submit</button>
        </div>
      </div>
    </>

  )
}

export default App
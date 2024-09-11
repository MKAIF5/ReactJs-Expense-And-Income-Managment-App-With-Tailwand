function App() {

  return (
    <>
      <div className="my-20">
        <h1 className="text-black text-center text-5xl">Total Balance</h1>
        <br />
        <h1 className="text-white text-center text-4xl">0.00</h1>
      </div>
      <div className="flex justify-center gap-1">
        <div className="bg-white w-36 text-center p-6">
          <p className="font-medium text-xl">Expense</p>
          <p className="text-green-400 font-semibold">00.000</p>
        </div>
        <div className="bg-white w-36 text-center p-6">
          <p className="font-medium text-xl">Income</p>
          <p className="text-red-700 font-semibold">00.000</p>
        </div>

      </div>
    </>
  )
}

export default App
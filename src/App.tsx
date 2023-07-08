
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/fautures/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"


function App() {

const {count} = useAppSelector((state)=> state.counter)
const dispatch = useAppDispatch()
  return (
  
  <div className="">

<div className="flex justify-center items-center mt-10 gap-6 "><button 
onClick={()=>dispatch(increment())}
className="border-2 hover:bg-green-600 border-green-500 rounded-md px-2 py-3">Increment</button>
<button 
onClick={()=>dispatch(incrementByAmount(10))}
className="border-2 hover:bg-green-600 border-green-500 rounded-md px-2 py-3">IncrementByAmount</button><div>{count}</div>
<button
onClick={()=>dispatch(decrement())}
className="border-2 border-green-500 hover:bg-red-400 rounded-md px-2 py-3">Decrement</button>

</div>
  </div>
  )
}

export default App

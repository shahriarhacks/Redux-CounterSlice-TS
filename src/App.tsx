import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-5 px-5 py-5">
      <div className="">
        <button
          onClick={() => dispatch(increment())}
          className="border-sky-300 border-4 px-5 py-3 rounded-md hover:bg-blue-500"
        >
          Increment
        </button>
      </div>
      <div className="">
        <button
          onClick={() => dispatch(incrementByAmount(7))}
          className="border-sky-300 border-4 px-5 py-3 rounded-md hover:bg-blue-500"
        >
          Increment By NUM
        </button>
      </div>
      <div className="px-5 py-3">{count}</div>
      <div className="">
        <button
          onClick={() => dispatch(decrementByAmount(7))}
          className="border-orange-300 border-4 px-5 py-3 rounded-md hover:bg-red-500"
        >
          Decrement by NUM
        </button>
      </div>
      <div className="">
        <button
          onClick={() => dispatch(decrement())}
          className="border-orange-300 border-4 px-5 py-3 rounded-md hover:bg-red-500"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

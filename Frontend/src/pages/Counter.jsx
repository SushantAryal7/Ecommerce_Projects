import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 text-white m-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white m-2 rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-green-500 text-white m-2 rounded"
      >
        Increment by 5
      </button>
    </div>
  );
}

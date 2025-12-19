import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterActions";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Conter app with Redux</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </>
  );
}

export default App;

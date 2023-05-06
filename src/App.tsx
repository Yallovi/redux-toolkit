/** @format */
import { FC } from "react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Pokemon from "./components/Pokemon";

const App: FC = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  const count = useTypedSelector((state) => state.counter.value);
  const { decrement, increment, incrementByAmount } = useActions();

  return (
    <div className={"flex justify-center flex-col"}>
      <div className="text-center">{count}</div>
      <button
        className="border border-white mt-3"
        aria-label="Increment value"
        onClick={() => increment()}>
        Increment
      </button>

      <button
        className="border border-white mt-3"
        aria-label="Decrement value"
        onClick={() => decrement()}>
        Decrement
      </button>
      <button
        className="border border-white mt-3"
        onClick={() => incrementByAmount(10)}>
        incrementByAmount
      </button>
      <Pokemon />
    </div>
  );
};

export default App;

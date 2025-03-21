import { useCounter } from "../hooks";

export const CounterWhithCustomHook = () => {

    const {counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className="btn btn-success" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={()=>decrement(2)}>-1</button>
        </>
    );
}
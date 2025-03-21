import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback(
      (value) => {
        setCounter((c) => c + value)
      },
      [],
    )
    

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    );
}
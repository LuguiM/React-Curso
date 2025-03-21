import { CounterApp, CounterWhithCustomHook } from "./01-useState"
import { SimpleForm, FormWithCustomHook } from "./02-useEffect"
import { MultipleCustomHooks } from "./03-examples"
import { FocusScreen  } from "./04-useRef"
import { Layout } from "./05-useLayoutEffect/Layout"
import { Memorize, MemoHook, CallbackHook } from "./06-memos"
import { Padre } from "./07-tarea-memo/Padre"
// import './08-useReducer/intro-reducer'
import { TodoApp } from "./08-useReducer/TodoApp"

export default function HooksApp() {
    return (
        <>
            <h1 className="text-center">HookApp</h1>
            <br />

            <TodoApp />
        </>
    )
}

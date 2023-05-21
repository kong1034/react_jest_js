import { TodoInput } from "./TodoInput/TodoInput.jsx"
import { TodoList } from "./TodoList/TodoList.jsx"

export const TodoWrap = () => {
    return <section>
        <TodoInput/>
        <TodoList/>
    </section>
}
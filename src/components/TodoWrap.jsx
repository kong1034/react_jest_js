import { TodoInput } from "./TodoInput/TodoInput"
import { TodoList } from "./TodoList/TodoList"

export const TodoWrap = () => {
    return <section>
        <TodoInput/>
        <TodoList/>
    </section>
}
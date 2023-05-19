import { useEffect, useState } from 'react';
import axios from 'axios';
import {} from './TodoList.css';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/todos')
        .then(res => setTodos(res.data))
        .catch(err => {
            console.error(err);
            alert('다시 입력해주세요');
        })
    }, [])

    return <ul className='ulWrap'>
        {
            todos.length === 0 ? "내용을 입력해주세요." : 
            todos.map(res => (
                <li key={res.id}>
                    {res.todo}
                </li>
            ))
        }
    </ul>
}
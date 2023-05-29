import { useEffect, useState } from 'react';
import axios from 'axios';
import {} from './TodoList.css';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [ul, setUl] = document.querySelectorAll('.ulWrap');

    useEffect(() => {
            axios.get('https://my-json-server.typicode.com/kong1034/db/todos')
            .then(res => setTodos(res.data))
            .catch(err => {
                console.error(err);
                alert('다시 입력해주세요');
            })
    }, [])

    return <ul className='ulWrap'>
        {
            todos.length === 0 ? <li>내용을 입력해주세요.</li> : 
            todos.map(res => (
                <li key={res.id}>
                    {res.todo}
                </li>
            ))
        }
    </ul>
}
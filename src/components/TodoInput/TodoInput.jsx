import { CommonButton } from '../button/CommonButton';
import {CommonInput} from '../input/CommonInput';
import axios from 'axios';
import {} from './TodoInput.css'
import { useRef } from 'react';

export const TodoInput = () => {
    const todosRef = useRef('');

    const addBtn = () => {
        todosRef.current.value.length === 0 || todosRef.current.value === ' ' ? alert('할일을 입력해주세요.') : 
        axios.post('http://localhost:4000/todos', {
            todo: todosRef.current.value
        })
        .then(res => {
            alert('추가 하셨습니다.');
        })
        .catch(err => {
            console.error(err);
            alert('다시 입력해주세요.');
        })
    }

    const button_props = {
        txt: '추가',
        onClick: addBtn
    }
    const input_props = {
        txt: '할일을 적어주세요.',
        value: todosRef
    }

    return <section className='inputWrap'>
        <div className='c_inputWrap'>
            <CommonInput props={input_props}/>
        </div>
        <div className='c_button'>
            <CommonButton props={button_props}/>
        </div>
    </section>
}
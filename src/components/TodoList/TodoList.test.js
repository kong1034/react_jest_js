import { act, render, screen, waitFor } from '@testing-library/react';
import {TodoList} from './TodoList';
import axios from 'axios';

jest.mock('axios');

describe('list component test', () => {
    const responseData = [
        {id:1, todo: '밥먹기'},
        {id:2, todo: '설겆이'},
        
    ];
    let list;
    
    test('Get api test', async () => {
        
    
        //API요청
        //act의 경우 변화가 생길만한 코드를 넣어두는 곳이다.
        //mockResolvedValue의 경우 mock 함수의 결과를 예상하여 넣어두는것이다.
        await act(async () => {
            axios.get.mockResolvedValueOnce({data:responseData});
            await render(<TodoList/>);
        })
        
        //waitFor는 특정 엘리먼트에 나타나는 변화가 완료될때까지 기다려줍니다.
        await waitFor(async () => {
            //실제 mock api를 몇번 불렀는지 및 어떤 url로 불렀는지 체크
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith('http://localhost:4000/todos');
            
            //list 전부를 하나의 promise 형태로 받아오는것
            list = screen.findAllByRole('listitem');
            
            await list.then((res,index) => {
                res.forEach((item, index) => {
                    expect(item.textContent).toContain(responseData[index].todo);
                })
                
            })

        })
        
        //테스트가 끝나면 모든 mock 함수를 지운다.
        jest.clearAllMocks();
    });
})

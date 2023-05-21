import { render, waitFor, act, screen } from '@testing-library/react';
import axios from 'axios';
import { TodoInput } from './TodoInput';

jest.mock('axios');

describe('input component test', () => {
    //기능 테스트
    test('post 요청 테스트', () => {
        const requestData = [
            { todo: '설겆이하기'}
        ];
    
        const responseData = {
            todo: requestData[0].todo
        }
    
        jest.spyOn(axios, 'post').mockResolvedValueOnce({ status:200, data:requestData})
    })

    //컴포넌트 테스트
    test('input component rendering test', async () => {
        render(<TodoInput/>);

        await act(async () => {
            const input = screen.findByRole('input');
                const placeholder = screen.getByPlaceholderText('할일을 적어주세요.');
                const button = screen.findByRole('button');
            waitFor(() => {
                
                expect(input).toBeInTheDocument();
                expect(placeholder).toEqual('할일을 적어주세요.');
                expect(button).toBeInTheDocument();
                expect(button).toEqual('추가');
            })
        })
    })
})

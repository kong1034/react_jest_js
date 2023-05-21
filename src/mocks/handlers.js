// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
    //get 요청
    rest.get('http://localhost:4000/todos', (req, res, ctx) => {
        return res(
            ctx.json([
                {id:1, todo:'밥먹기'},
                {id:2, todo:'설겆이 하기'}
            ])
        )
    }),

    rest.post('http://localhost:4000/todo', (req, res, ctx) => {
        const {todo} = req.body;

        return res(
            ctx.json({
                id:3,
                todo:'맞다'
            })
        )
    })
]
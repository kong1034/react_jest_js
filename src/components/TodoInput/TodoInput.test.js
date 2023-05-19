const axios = require('axios');

jest.mock('axios');

test('post 요청 테스트', () => {
    const requestData = [
        { todo: '설겆이하기'}
    ];

    const responseData = {
        todo: requestData[0].todo
    }

    axios.post.mockResolvedValueOnce({ status:200, data:requestData})

    axios.post('http://localhost:4000/todos', requestData)
    .then(res => {
        expect(res.data).toEqual(responseData);
        expect(res.status).toBe(200);
    })
    .catch(err => expect(err).toBeInstanceOf(Error));
})
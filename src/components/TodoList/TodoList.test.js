const axios = require('axios');

jest.mock('axios');

test('Get 요청 테스트', () => {
    const responseData = [
        { id:1, todo: '밥먹기'}
    ];

    //API요청
    axios.get.mockResolvedValue({status:200, data: responseData});

    //API응답
    axios.get('http://localhost:4000/todos')
    .then((res) => {
        expect(res.data).toEqual(responseData)
        expect(res.status).toBe(200)
    })
    .catch(err => expect(err).toBeInstanceOf(Error))
});
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server.js';

// MSW 서버를 시작합니다.
beforeAll(() => server.listen());

// 각각의 테스트 이후에 MSW 서버를 재설정합니다.
afterEach(() => server.resetHandlers());

// MSW 서버를 종료합니다.
afterAll(() => server.close());
import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5s', target: 10 },
        { duration: '5s', target: 50 },
        { duration: '5s', target: 100 },
        { duration: '5s', target: 50 },
        { duration: '5s', target: 0 },
    ],
};

const url = 'http://localhost:3001/api/sessions';
const payload = JSON.stringify({
    name: 'Load testing',
    time: 10000,
    createdAt: new Date().toString(),
});

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export default function () {
    http.post(url, payload, params);
}

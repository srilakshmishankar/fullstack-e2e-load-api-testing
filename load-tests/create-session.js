import http from 'k6/http';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    // Ramp up from 10 virtual users up to 100, then goes back to 0
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
};

export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    }
};

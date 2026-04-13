 import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 20,         // 20 Users (Heavy Load)
  duration: '2m',  // 2 Minute test (Long run)
};

export default function () {
  // Page load kiya
  let res = http.get('https://test.k6.io');

  // Load check
  check(res, {
    'OK': (r) => r.status === 200,      // Status check
    'Data': (r) => r.body.length > 0,   // Content check
  });

  // 1 sec gap
  sleep(1);
}
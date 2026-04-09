import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {

  let res = http.get('https://test.k6.io');

  console.log(res.status);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
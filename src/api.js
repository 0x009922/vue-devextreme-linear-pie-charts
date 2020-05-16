import axios from 'axios';

const JWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlODA2ZWI2NzAwMTRkNGMzMmRkZmIwZCIsImV4cCI6MTU5MDE0NjA0NH0.f2GSoz6ghTmQEDwVvDYIszwh-dwZd1X7q4PA8lgOF9E';

export default axios.create({
  baseURL: 'https://xbi-dev.elastoo.com/api/datasource',
  headers: {
    Authorization: `Bearer ${JWT}`,
  }
});

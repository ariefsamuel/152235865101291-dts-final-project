import axios from 'axios';

const BASE_URL = 'https://developers.zomato.com/api/v2.1/';
const API_KEY = '497a784395906805fa9ab0248dcde10d';

const zomato = axios.create({
    baseURL: BASE_URL,
    headers: {
        "user-key": API_KEY
      },
});

export default zomato;
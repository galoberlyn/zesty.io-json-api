import axios from 'axios';

const ABOUTPAGE_URL = 'https://www.zesty.io/-/instant/7-e93178-vqvclg.json';

export const getContentsAPI = () => axios.get(ABOUTPAGE_URL);

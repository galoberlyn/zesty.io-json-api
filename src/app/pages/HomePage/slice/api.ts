import axios from 'axios';

const HOMEPAGE_URL = 'https://www.zesty.io/-/gql/platform_section.json';

export const getContentsAPI = () => axios.get(HOMEPAGE_URL);

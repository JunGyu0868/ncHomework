import axios from 'axios';

const APP_ID: String = '610e473db5e5e84362a228f8';

class MainRepository {
    fetchUserList = (page: number, limit: number): any => {
        return axios
            .get(`https://dummyapi.io/data/api/user?limit=${limit}&page=${page}`, { headers: { 'app-id': APP_ID } })
            .then((res) => (res && res.data) || null)
            .catch((error) => console.log(error));
    };
}

export default MainRepository;
export const mainRepository = new MainRepository();

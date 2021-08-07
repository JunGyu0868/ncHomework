import axios from 'axios';

const APP_ID: String = '610e473db5e5e84362a228f8';

class DetailRepository {
    fetchUserDetailInfo = (id: string): any => {
        return axios
            .get(`https://dummyapi.io/data/api/user/${id}`, { headers: { 'app-id': APP_ID } })
            .then((res) => (res && res.data) || null)
            .catch((error) => console.log(error));
    };
}

export default DetailRepository;
export const detailRepository = new DetailRepository();

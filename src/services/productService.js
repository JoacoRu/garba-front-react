import axios from 'axios';
import RouteApi from '../helpers/routeApi';

const get = (id) => {
    return axios.get(`http://${RouteApi}/products/${id}`);
};
const list = () => {
    return axios.get(`http://${RouteApi}/products`);
};

export default {
    get,
    list
}
import axios from 'axios';
import RouteApi from '../helpers/routeApi';

const get = async (id) => {
    const response = axios.get(`http://${RouteApi}/products/${id}`);
    return response;
};
const list = () => {
    const response = axios.get(`http://${RouteApi}/products`);
    return response;
};

export default {
    get,
    list
}
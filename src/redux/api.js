import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchItems = async () => {
    const { data } = await axios.get('campers');
    return data.items;
};

export const fetchItemsId = async (itemId) => {
    const { data } = await axios.get(`campers/${itemId}`);
    return data;
};
import axios from "axios";

axios.defaults.baseURL = 'ttps://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchItems = async () => {
    const { data } = await axios.get('campers');
    return data.items;
};

export const fetchItemsId = async (itemsId) => {
    const { data } = await axios.get(`campers/${itemsId}`);
    return data;
};
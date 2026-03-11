import { getApiResponce } from "../utils";

export const getList = async() => {
    const data = await getApiResponce('https://jsonplaceholder.typicode.com/todos/2');
    return data;
}
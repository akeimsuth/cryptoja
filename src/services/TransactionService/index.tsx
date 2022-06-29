import { handleError, handleResponse } from '../utils';
import endpoints from '../endpoints';
import axiosInstance from '../axios';

export function createTransaction(id: string, params: any) {
    const url = endpoints.oneTransaction(id);
    return axiosInstance.post(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function getTransaction(id: string) {
    const url = endpoints.oneTransaction(id);
    return axiosInstance.get(url)
        .then(handleResponse)
        .catch(handleError);
}

export function getTransactions() {
    const url = endpoints.transactions;
    return axiosInstance.get(url)
        .then(handleResponse)
        .catch(handleError);
}

export function updateTransaction(id: string, params) {
    const url = endpoints.oneTransaction(id);
    return axiosInstance.put(url, params)
        .then(handleResponse)
        .catch(handleError);
}
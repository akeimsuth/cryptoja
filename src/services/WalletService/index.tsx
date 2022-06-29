import { handleError, handleResponse } from '../utils';
import endpoints from '../endpoints';
import axiosInstance from '../axios';

export function createWallet(id: string, params: any) {
    const url = endpoints.oneWallet(id);
    return axiosInstance.post(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function getWallet(id: string) {
    const url = endpoints.oneWallet(id);
    return axiosInstance.get(url)
        .then(handleResponse)
        .catch(handleError);
}

export function deleteWallet(id: string) {
    const url = endpoints.oneWallet(id);
    return axiosInstance.delete(url)
        .then(handleResponse)
        .catch(handleError);
}

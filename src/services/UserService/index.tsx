import { handleError, handleResponse } from '../utils';
import endpoints from '../endpoints';
import axiosInstance from '../axios';

export function createUser(params: any) {
    const url = endpoints.user;
    return axiosInstance.post(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function updateUser(id: string, params: any) {
    const url = endpoints.oneUser(id);
    return axiosInstance.put(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function updateUserDetails(id: string, params: any) {
    const url = endpoints.singleUser(id);
    return axiosInstance.put(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function updateKYCUser(id: string, params: any) {
    const url = endpoints.oneKYC(id);
    return axiosInstance.put(url, params)
        .then(handleResponse)
        .catch(handleError);
}

export function getUser(id: string) {
    const url = endpoints.oneUser(id);
    return axiosInstance.get(url)
        .then(handleResponse)
        .catch(handleError);
}

export function getUsers() {
    const url = endpoints.users;
    return axiosInstance.get(url)
        .then(handleResponse)
        .catch(handleError);
}
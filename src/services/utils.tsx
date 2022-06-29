export async function handleRawResponse(response: any) {
    return response;
}

export async function handleResponse(response: any) {
    return response.data;
}

// TODO log error with logging service.
export function handleError(error: any) {
    // eslint-disable-next-line no-console
    console.error(`API call failed. ${error}`);
    throw error;
}

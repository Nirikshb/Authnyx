import Config from '../lib/config';

const BASE_URL = Config.apiUrl;

async function request(endpoint, options = {}) {
    const defaultOptions = {
        headers: {
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...options.headers,
        },
        credentials: 'include',
        ...options,
    };

    const res = await fetch(`${BASE_URL}${endpoint}`, defaultOptions);

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API error: ${res.status} ${errorText}`);
    }

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return res.json();
    } else {
        return res;
    }
}

export const api = {

    get: (url, options = {}) => request(url, { ...options, method: 'GET' }),

    post: (url, body, options = {}) =>
        request(url, { ...options, method: 'POST', body: body ? JSON.stringify(body) : undefined }),

    put: (url, body, options = {}) =>
        request(url, { ...options, method: 'PUT', body: body ? JSON.stringify(body) : undefined }),

    patch: (url, body, options = {}) =>
        request(url, { ...options, method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),

    delete: (url, options = {}) => request(url, { ...options, method: 'DELETE' }),
};

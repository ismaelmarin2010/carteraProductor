const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ??
    "http://localhost:3000/api";
export async function apiRequest(path, options = {}) {
    const { token, headers, ...requestOptions } = options;
    const requestHeaders = new Headers(headers);
    requestHeaders.set("Content-Type", "application/json");
    if (token) {
        requestHeaders.set("Authorization", `Bearer ${token}`);
    }
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...requestOptions,
        headers: requestHeaders
    });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}.`);
    }
    if (response.status === 204) {
        return undefined;
    }
    return response.json();
}

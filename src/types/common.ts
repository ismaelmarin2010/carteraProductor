export type ID = string;

export interface ApiError {
    message: string;
    code?: string;
}

export interface Pagination {
    page: number;
    pageSize: number;
    total: number;
}
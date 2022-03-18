export type TApiResponse<T> = {
    message: string;
    statusCode: number;
    data: T[];
};

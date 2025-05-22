export declare class NotFoundError extends Error {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}

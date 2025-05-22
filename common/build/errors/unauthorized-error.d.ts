export declare class UnauthorizedError extends Error {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}

export declare class BadRequestError extends Error {
    statusCode: number;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}

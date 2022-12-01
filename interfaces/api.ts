export interface ResponseApi {
    success: boolean,
    message?: string,
    statusCode?: number,
    errorCode?: number,
    data?: any
} 
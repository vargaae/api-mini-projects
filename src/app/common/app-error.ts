export class AppError {
    message: any;
    constructor(public originalError?: any) {}
}
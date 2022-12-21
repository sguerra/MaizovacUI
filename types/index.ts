export interface APIError {
    $schema: 'api:error';
    message: string;
}

export interface ApiCollection<T> {
    items: T[]
}

export type ServiceExecutionResponse = { result: number }

export interface IUser {
    uuid: string | null
    username: string
    status: string
    role: string
}

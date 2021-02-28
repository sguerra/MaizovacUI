export interface ApiCollection<T> {
    items: T[]
}

export interface IUser {
    uuid: string | null
    username: string
    status: string
    role: string
}

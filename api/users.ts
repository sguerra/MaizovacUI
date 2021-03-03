import { IUser } from '~/types'
import BaseApi from './base'

class UsersApi extends BaseApi {
    _resource = '/users'

    async findAll(): Promise<IUser[]> {
        return await this.getCollection(this._resource)
    }

    async update(user: IUser): Promise<IUser> {
        const url = `${this._resource}/${user.username}`
        const data = {
            role: user.role,
            status: user.status,
        }
        return await this.patch<IUser>(url, data)
    }

    async save(user: IUser): Promise<IUser> {
        if (!user.uuid) {
            const data = user as any
            delete data['uuid']
            return await this.post<IUser>(this._resource, data)
        }

        return this.update(user)
    }

    async destroy(user: IUser): Promise<void> {
        const url = `${this._resource}/${user.username}`
        await this.delete(url)
    }
}

export default UsersApi

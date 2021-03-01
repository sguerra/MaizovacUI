import { ApiCollection, IUser } from '~/types'
import BaseApi from './base'

class UsersApi extends BaseApi {
    _resource = '/users'

    async find(): Promise<IUser[]> {
        const response = ((await this.get(this._resource)) as unknown) as ApiCollection<IUser>
        return response.items
    }

    async update(user: IUser): Promise<IUser> {
        const url = `${this._resource}/${user.username}`
        const data = {
            role: user.role,
            status: user.status
        }
        return ((await this.patch(url, data)) as unknown) as IUser
    }

    async save(user: IUser): Promise<IUser> {
        if (!user.uuid) {
            const data = user as any
            delete data['uuid']
            return ((await this.post(this._resource, data)) as unknown) as IUser
        }

        return this.update(user)
    }

    async destroy(user: IUser): Promise<void> {
        const url = `${this._resource}/${user.username}`
        await this.delete(url)
    }
}

export default UsersApi

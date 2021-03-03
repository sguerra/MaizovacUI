import { IUser } from '~/types'
import BaseApi from './base'

export interface IUserBalance {
    User: IUser
    balance: number
}

class UserBalancesApi extends BaseApi {
    async findCurrent(): Promise<IUserBalance> {
        return await this.get<IUserBalance>('/profile')
    }

    async findAll(): Promise<IUserBalance[]> {
        return this.getCollection('/balances')
    }
}

export default UserBalancesApi

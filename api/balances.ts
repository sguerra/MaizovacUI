import { IUser } from '~/types'
import BaseApi from './base'

export interface IBalance {
    user: IUser
    balance: number
}

class BalancesApi extends BaseApi {

    async findCurrent(): Promise<IBalance> {
        return await this.get('/profile') as IBalance
    }
}

export default BalancesApi

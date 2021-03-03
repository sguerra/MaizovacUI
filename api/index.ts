import UsersApi from './users'
import BinaryServiceApi from './binaryService'
import SquareRootServiceApi from './squareRootService'
import RandomStringServiceApi from './randomStringService'
import ServicesApi from './services'
import RecordsApi from './records'
import BalancesApi from './balances'
import BaseApi from './base'

export const usersApi = new UsersApi()
export const binaryServiceApi = new BinaryServiceApi()
export const squareRootServiceApi = new SquareRootServiceApi()
export const randomStringServiceApi = new RandomStringServiceApi()
export const servicesApi = new ServicesApi()
export const recordsApi = new RecordsApi()
export const balancesApi = new BalancesApi()
export { BaseApi }

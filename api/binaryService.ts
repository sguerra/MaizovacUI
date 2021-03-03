import BinaryOperation from '~/models/BinaryOperation'
import { ServiceExecutionResponse } from '~/types'
import BaseApi from './base'



class BinaryService extends BaseApi {
    async execute(operation: BinaryOperation) {
        const url = `/services/${operation.type}/calculate`
        const data = await this.post<ServiceExecutionResponse>(url, {
            parameters: operation,
        })
        return data.result
    }
}

export default BinaryService

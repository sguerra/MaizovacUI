import BinaryOperation from '~/models/BinaryOperation'
import BaseApi from './base'

class BinaryService extends BaseApi {
    async execute(operation: BinaryOperation): Promise<number> {
        const url = `/services/${operation.type}/calculate`
        const data = await this.post(url, operation)
        return data.result as number
    }
}

export default BinaryService

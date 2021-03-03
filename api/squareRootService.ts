import { ServiceExecutionResponse } from '~/types'
import BaseApi from './base'

class SquareRootService extends BaseApi {
    async execute(operand: number) {
        const data = await this.post<ServiceExecutionResponse>('/services/square_root/calculate', {
            parameters: {
                operand,
            },
        })
        return data.result as number
    }
}

export default SquareRootService

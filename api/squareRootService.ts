import BaseApi from './base'

class SquareRootService extends BaseApi {
    async execute(operand: number): Promise<number> {
        const data = await this.post('/services/square_root/calculate', { operand })
        return data.result as number
    }
}

export default SquareRootService

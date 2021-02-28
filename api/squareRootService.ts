import BaseApi from './base'

class SquareRootService extends BaseApi {
    async execute(operand: number): Promise<number> {
        return Math.sqrt(operand)
        // const data = await this.post('/services/square_root', operation)
        // return data.result as number
    }
}

export default SquareRootService

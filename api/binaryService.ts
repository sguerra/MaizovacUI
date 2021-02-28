import BinaryOperation from '~/models/BinaryOperation'
import BaseApi from './base'

class BinaryService extends BaseApi {
    async execute(operation: BinaryOperation): Promise<number> {
        switch (operation.type) {
            case 'addition':
                return operation.firstOperand + operation.secondOperand
            case 'substraction':
                return operation.firstOperand - operation.secondOperand
            case 'multiplication':
                return operation.firstOperand * operation.secondOperand
            case 'division':
                return operation.firstOperand / operation.secondOperand
        }
        // const data = await this.post(operation.type, operation)
        // return data.result as number
    }
}

export default BinaryService

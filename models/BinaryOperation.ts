export type BinaryOperationTypes = 'addition' | 'substraction' | 'multiplication' | 'division'

class BinaryOperation {
    firstOperand: number;
    secondOperand: number;
    type: BinaryOperationTypes;
    result?: number;

    constructor(firstOperand: number, secondOperand: number, type: BinaryOperationTypes) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
        this.type = type;
    }
}

export default BinaryOperation
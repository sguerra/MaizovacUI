class RandomStringOperation {
    length: number;
    includeDigits: boolean;
    includeUppercase: boolean;

    constructor(length: number, includeDigits: boolean, includeUppercase: boolean) {
        this.length = length;
        this.includeDigits = includeDigits;
        this.includeUppercase = includeUppercase;
    }
}

export default RandomStringOperation
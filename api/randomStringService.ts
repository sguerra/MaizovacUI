import RandomStringOperation from '~/models/RandomStringOperation'
import BaseApi from './base'

class RandomStringServiceApi extends BaseApi {
    async execute(operation: RandomStringOperation) {
        const data = await this.post<{ result: string }>('/services/random_string/calculate', {
            parameters: {
                length: operation.length,
                digits: operation.includeDigits,
                lowerAlphabetic: true,
                upperAlphabetic: operation.includeUppercase,
                unique: true,
            },
        })
        return data.result
    }
}

export default RandomStringServiceApi

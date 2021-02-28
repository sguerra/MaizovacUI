import RandomStringOperation from '~/models/RandomStringOperation'
import BaseApi from './base'

class RandomStringServiceApi extends BaseApi {
    async execute(operation: RandomStringOperation): Promise<string> {        
        const data = await this.post('/services/random_string/calculate', {
            length: operation.length,
            digits: operation.includeDigits,
            lowerAlphabetic: true,
            upperAlphabetic: operation.includeUppercase
        })
        return data.result as string
    }
}

export default RandomStringServiceApi

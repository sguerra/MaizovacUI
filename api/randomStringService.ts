import RandomStringOperation from '~/models/RandomStringOperation'
import BaseApi from './base'

class RandomStringServiceApi extends BaseApi {
    async execute(operation: RandomStringOperation): Promise<string> {        
        return 'qwerty'
        // const data = await this.post('/services/random_string', operation)
        // return data.result as string
    }
}

export default RandomStringServiceApi

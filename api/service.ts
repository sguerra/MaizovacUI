import Service from '~/models/Service'
import BaseApi from './base'

class ServiceApi extends BaseApi {
    async fetch(): Promise<Service[]> {        
        return [
            {
                type: 'addition',
                cost: 15
            },
            {
                type: 'substraction',
                cost: 11
            },
            {
                type: 'multiplication',
                cost: 20
            },
            {
                type: 'division',
                cost: 22
            },
            {
                type: 'square_root',
                cost: 30
            },
            {
                type: 'random_string',
                cost: 40
            }
        ] as Service[]
    }
}

export default ServiceApi
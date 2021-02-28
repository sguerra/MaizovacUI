import Service from '~/models/Service'
import BaseApi from './base'

class ServiceApi extends BaseApi {
    async fetch(): Promise<Service[]> {
        return [
            {
                uuid: '123',
                type: 'addition',
                cost: 15,
                status: 'active',
            },
            {
                uuid: '123',
                type: 'substraction',
                cost: 11,
                status: 'active',
            },
            {
                uuid: '123',
                type: 'multiplication',
                cost: 20,
                status: 'active',
            },
            {
                uuid: '123',
                type: 'division',
                cost: 22,
                status: 'active',
            },
            {
                uuid: '123',
                type: 'square_root',
                cost: 30,
                status: 'active',
            },
            {
                uuid: '123',
                type: 'random_string',
                cost: 40,
                status: 'active',
            },
        ] as Service[]
    }

    async save(service: Service) {}
}

export default ServiceApi

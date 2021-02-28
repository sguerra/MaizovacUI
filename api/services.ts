import Service from '~/models/Service'
import { ApiCollection } from '~/types'
import BaseApi from './base'

class ServiceApi extends BaseApi {
    async fetch(): Promise<Service[]> {
        const response = ((await this.get('/services')) as unknown) as ApiCollection<Service>
        return response.items
    }

    async save(service: Service) {}
}

export default ServiceApi

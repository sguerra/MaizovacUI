import Service from '~/models/Service'
import BaseApi from './base'

class ServiceApi extends BaseApi {
    private _resource = '/services'
    
    async fetchAll(): Promise<Service[]> {
        return await this.getCollection('/services')
    }

    async save(service: Service): Promise<Service> {
        const url = `${this._resource}/${service.type}`
        const data = {
            type: service.type,
            cost: Number(service.cost),
            status: service.status,
        }
        return await this.patch<Service>(url, data)
    }
}

export default ServiceApi

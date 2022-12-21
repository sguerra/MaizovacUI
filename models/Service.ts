export type ServiceTypes = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'square_root' | 'random_string'
export type ServiceStatus = 'active' | 'beta' | 'inactive'

class Service {
    uuid: string;
    cost: number
    type: ServiceTypes
    status: ServiceStatus

    constructor(uuid: string, cost: number, type: ServiceTypes, status: ServiceStatus) {
        this.uuid = uuid
        this.cost = cost
        this.type = type
        this.status = status
    }
}

export default Service

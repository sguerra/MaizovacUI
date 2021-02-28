export type ServiceTypes = 'addition' | 'substraction' | 'multiplication' | 'division' | 'square_root' | 'random_string'
export type ServiceStatus = 'active' | 'beta' | 'inactive'

class Service {
    cost: number
    type: ServiceTypes
    status: ServiceStatus

    constructor(cost: number, type: ServiceTypes, status: ServiceStatus) {
        this.cost = cost
        this.type = type
        this.status = status
    }
}

export default Service

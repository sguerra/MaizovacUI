import { ServiceTypes } from "./Service";

class Record {
    uuid: string
    serviceType: ServiceTypes
    username: string
    cost: number
    userBalance: number
    serviceResponse: string
    date: string

    constructor(uuid: string, serviceType: ServiceTypes, username: string, cost: number, userBalance: number, serviceResponse: string, date: string) {
        this.uuid = uuid
        this.serviceType = serviceType
        this.username = username
        this.cost = cost
        this.userBalance = userBalance
        this.serviceResponse = serviceResponse
        this.date = date
    }
}

export default Record

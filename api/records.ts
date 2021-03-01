import Record from '~/models/Record'
import { ApiCollection } from '~/types'
import BaseApi from './base'

const results = [
    {
        uuid: '123',
        serviceType: 'addition',
        username: 'lolo',
        cost: 123,
        userBalance: 456,
        serviceResponse: 'empty',
        date: new Date(),
    },
] as Record[]

class RecordsApi extends BaseApi {
    async find(): Promise<Record[]> {
        return results;
        // const response = ((await this.get('/records')) as unknown) as ApiCollection<Record>
        // return response.items
    }

    async save(service: Record) {}

    async destroy(record: Record): Promise<void> {
        const url = `/records/${record.uuid}`
        await this.delete(url)
    }
}

export default RecordsApi

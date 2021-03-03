import Record from '~/models/Record'
import { ApiCollection } from '~/types'
import { DateUtils } from '~/utils/DateUtils'
import BaseApi from './base'

class RecordsApi extends BaseApi {
    _mapCollectionToRecords(collection: ApiCollection<any>): Record[] {

        if(!collection.items){
            return []
        }

        return collection.items.map((item) => {
            return new Record(
                item.uuid,
                item.Service.type,
                item.User.username,
                item.cost,
                item.balance,
                item.serviceResponse,
                DateUtils.formatDate(item.date)
            )
        })
    }

    async find(): Promise<Record[]> {
        const response = ((await this.get('/records')) as unknown) as ApiCollection<Record>
        return this._mapCollectionToRecords(response)
    }

    async findCurrent(): Promise<Record[]> {
        const response = ((await this.get('/profile/records')) as unknown) as ApiCollection<Record>
        return this._mapCollectionToRecords(response)
    }

    async save(service: Record) {}

    async destroy(record: Record): Promise<void> {
        const url = `/records/${record.uuid}`
        await this.delete(url)
    }
}

export default RecordsApi

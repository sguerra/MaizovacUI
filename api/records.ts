import Record from '~/models/Record'
import { DateUtils } from '~/utils/DateUtils'
import BaseApi from './base'

class RecordsApi extends BaseApi {
    _mapCollectionToRecords(items: any[]): Record[] {
        if(!items){
            return []
        }

        return items.map((item) => {
            return new Record(
                item.uuid,
                item.Service.type,
                item.User.username,
                item.cost,
                item.balance,
                item.response,
                DateUtils.formatDate(item.date)
            )
        })
    }

    async find(): Promise<Record[]> {
        const items = await this.getCollection('/records')
        return this._mapCollectionToRecords(items)
    }

    async findCurrent(): Promise<Record[]> {
        const items = await this.getCollection('/profile/records')
        return this._mapCollectionToRecords(items)
    }

    async save(service: Record) {}

    async destroy(record: Record): Promise<void> {
        const url = `/records/${record.uuid}`
        await this.delete(url)
    }
}

export default RecordsApi

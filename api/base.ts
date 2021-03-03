import { Token } from '@nuxtjs/auth-next'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ApiCollection } from '~/types'

const axiosInstance = axios.create({ baseURL: `${process.env.baseUrl}/v1` })

class BaseApi {
    private axios: AxiosInstance
    private token: string

    constructor() {
        this.axios = axiosInstance
        this.token = ''
    }

    setToken(token: string) {
        this.token = token
    }

    async _makeRequest(config: AxiosRequestConfig) {
        try {
            const response = await this.axios({
                ...config,
                headers: {
                    Authorization: this.token,
                },
            })
            return response.data
        } catch (error) {
            throw new Error('API error')
        }
    }

    async get(url: string) {
        return this._makeRequest({ method: 'GET', url: url })
    }

    async getCollection<T>(url: string):  Promise<T[]> {
        const response = ((await this.get(url)) as unknown) as ApiCollection<T>
        return response.items || []
    }

    async post(url: string, data: any) {
        return this._makeRequest({ method: 'POST', url, data })
    }

    async patch(url: string, data: any) {
        return this._makeRequest({ method: 'PATCH', url, data })
    }

    async delete(url: string) {
        return this._makeRequest({ method: 'DELETE', url })
    }
}

export default BaseApi

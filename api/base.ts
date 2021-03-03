import { Token } from '@nuxtjs/auth-next'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ApiCollection } from '~/types'

const axiosInstance = axios.create({ baseURL: `${process.env.baseUrl}/v1` })

class BaseApi {
    private axios: AxiosInstance
    static token: string

    constructor() {
        this.axios = axiosInstance
    }

    async _makeRequest<T>(config: AxiosRequestConfig) {
        try {
            const response = await this.axios.request<T>({
                ...config,
                headers: {
                    Authorization: BaseApi.token,
                },
            })
            return response.data
        } catch (error) {
            throw new Error('API error')
        }
    }

    async get<T>(url: string) {
        return this._makeRequest<T>({ method: 'GET', url: url })
    }

    async getCollection<T>(url: string):  Promise<T[]> {
        const response = await this.get<ApiCollection<T>>(url)
        return response.items || []
    }

    async post<T>(url: string, data: any) {
        return this._makeRequest<T>({ method: 'POST', url, data })
    }

    async patch<T>(url: string, data: any) {
        return this._makeRequest<T>({ method: 'PATCH', url, data })
    }

    async delete<T>(url: string) {
        return this._makeRequest<T>({ method: 'DELETE', url })
    }
}

export default BaseApi

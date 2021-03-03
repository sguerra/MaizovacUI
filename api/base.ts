import { Token } from '@nuxtjs/auth-next'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({ baseURL: `${process.env.baseUrl}/v1` })

class BaseApi {
    private axios: AxiosInstance
    static token: string

    constructor() {
        this.axios = axiosInstance
    }

    async _makeRequest(config: AxiosRequestConfig) {
        try {
            const response = await this.axios({
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

    async get(url: string) {
        return this._makeRequest({ method: 'GET', url: url })
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

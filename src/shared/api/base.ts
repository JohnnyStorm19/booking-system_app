import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '../globals'

class ApiInstance {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
            timeout: 120000,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    async get<T>(
        endpoint: string,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        const response: AxiosResponse<T> = await this.axios.get(
            endpoint,
            options
        )
        return response.data
    }
}

export const apiInstance = new ApiInstance()
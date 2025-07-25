import { HTTPResponse } from 'services/http/http.types'
import { ITask } from 'types/global'
import http, { handleHttpError, handleHttpResponse } from '../../services/http'

export interface IParams {
    title: string
    status: string
    priority: string
    category: string
}

const loadTasks = (params: IParams): Promise<HTTPResponse<ITask[]>> => {
    return http
        .get(`/tasks?title=${params.title}&status=${params.status}&category=${params.category}&priority=${params.priority}`)
        .then(handleHttpResponse)
        .catch(handleHttpError)
}
const deleteTask = (id: string): Promise<HTTPResponse<ITask>> => {
    return http.delete(`tasks/${id}`).then(handleHttpResponse).catch(handleHttpError)
}
export const mainApi = {
    loadTasks,
    deleteTask,
}

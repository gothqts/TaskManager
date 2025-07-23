import http, { handleHttpError, handleHttpResponse } from 'services/http'
import { ITask } from 'types/global'
import { HTTPResponse } from 'services/http/http.types'

const loadTask = (id: string): Promise<HTTPResponse<ITask>> => {
    return http.get(`tasks/${id}`).then(handleHttpResponse).catch(handleHttpError)
}

const updateTask = (dto: ITask): Promise<HTTPResponse<ITask>> => {
    return http.patch(`tasks/${dto.id}`, dto).then(handleHttpResponse).catch(handleHttpError)
}

const deleteTask = (id: string): Promise<HTTPResponse<ITask>> => {
    return http.delete(`tasks/${id}`).then(handleHttpResponse).catch(handleHttpError)
}

const createTask = (dto: ITask): Promise<HTTPResponse<ITask>> => {
    return http.post('tasks', dto).then(handleHttpResponse).catch(handleHttpError)
}
export const taskApi = {
    loadTask,
    updateTask,
    deleteTask,
    createTask,
}
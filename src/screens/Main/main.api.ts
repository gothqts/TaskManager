import { HTTPResponse } from 'services/http/http.types'
import { ITask } from 'types/global'
import http, { handleHttpError, handleHttpResponse } from '../../services/http'

const loadTasks = (): Promise<HTTPResponse<ITask[]>> =>{
    return http.get('/tasks').then(handleHttpResponse).catch(handleHttpError)
}
const deleteTask = (id: string): Promise<HTTPResponse<ITask>> =>{
    return http.delete(`tasks/${id}`).then(handleHttpResponse).catch(handleHttpError)
}
export const mainApi = {
    loadTasks,
    deleteTask,
}

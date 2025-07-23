import useHttpLoaderWithServerErr from 'shared/hooks/httpLoader/useHttpLoaderWithServerErr'
import { taskApi } from 'screens/Task/task.api'
import { ITask } from 'types/global'

const useTaskFormAction = () =>{
    const { wait, serverError, loading } = useHttpLoaderWithServerErr()

    const updateTask = (dto: ITask, onSuccess: () => void) => {
        wait(taskApi.updateTask(dto), (resp) => {
            if (resp.status === 'success') {
               onSuccess()
            }
        })
    }
    const createTask = (dto: ITask, onSuccess: () => void) => {
        wait(taskApi.createTask(dto), (resp) => {
            if (resp.status === 'success') {
                onSuccess()
            }
        })
    }
    return { actions: { updateTask, createTask }, serverError, loading }
}
export default useTaskFormAction
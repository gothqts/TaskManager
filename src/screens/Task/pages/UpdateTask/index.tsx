import { useEffect, useState } from 'react'
import TaskForm from 'screens/Task/components/TaskForm'
import { ITask } from 'types/global'
import { useParams } from 'react-router-dom'
import { taskApi } from 'screens/Task/task.api'
import useHttpLoaderWithServerErr from 'shared/hooks/httpLoader/useHttpLoaderWithServerErr'
import styles from '../../taskScreen.module.css'
import LoaderPage from 'shared/LoaderPage'


const UpdateTask = () => {
    const { id } = useParams<{ id: string }>()
    const { wait, loading, serverError } = useHttpLoaderWithServerErr()
    const [task, setTask] = useState<ITask | null>(null)
    useEffect(() => {
        wait(taskApi.loadTask(id), ((resp) => {
            if (resp.status === 'success') {
                setTask(resp.body)
            }
        }))
    }, [id])


    if (loading) {
        return <LoaderPage />
    }

    return (
        <div className={styles.container}>
            {task ? <TaskForm action="updateTask" task={task} /> :
                (
                    <div className={styles.err_container}>
                        <span>Что-то пошло не так</span>
                        <span>{serverError}</span>
                    </div>
                )}
        </div>
    )
}

export default UpdateTask
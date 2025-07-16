import TaskDetails from './components/TaskDetails'
import styles from './taskScreen.module.css'
import { useParams } from 'react-router'
import { useContext, useLayoutEffect, useState } from 'react'
import TasksContext from 'shared/tasksContext'
import { ITask } from 'types/global'

const TaskScreen = () => {
    const { id } = useParams()
    const { tasks } = useContext(TasksContext)
    const [task, setTask] = useState<ITask | null>(null)

    useLayoutEffect(() => {
        const foundTask = tasks.find((task) => task.id === id)
        setTask(foundTask || null)
    }, [id, tasks])

    if (!task) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={styles.container}>
            <TaskDetails task={task} setTask={setTask} />
        </div>
    )
}

export default TaskScreen
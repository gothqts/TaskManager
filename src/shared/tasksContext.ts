import { createContext } from 'react'
import type { ITask } from 'types/global'

interface IContext {
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void,
}


const TasksContext = createContext<IContext>({
    tasks: [],
    setTasks: () => {
    },
})

export default TasksContext
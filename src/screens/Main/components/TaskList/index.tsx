import TaskItem from '../TaskItem'
import styles from './taskList.module.css'
import { ITask } from 'types/global'

interface ITaskListProps {
    filteredTasks: ITask[];
}

const TaskList = ({ filteredTasks }: ITaskListProps) => {

    return (
        <div className={styles.container}>
            {filteredTasks.map((task) => (
                <TaskItem task={task} key={task.id} />
            ))}
        </div>
    )
}

export default TaskList
import type { ITask } from 'types/global'
import styles from './taskItem.module.css'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { DeleteOutlined } from '@ant-design/icons'
import { mainApi } from 'screens/Main/main.api'
import { useAtom } from 'jotai'
import { tasksAtom } from 'screens/Main/main.atom'

interface ITaskItemProps {
    task: ITask;
}

const TaskItem = ({ task }: ITaskItemProps) => {

    const [tasks, setTasks] = useAtom<ITask[]>(tasksAtom)

    const handleClick = () => {
        mainApi.deleteTask(task.id).then((resp) => {
            if (resp.status === 'success') {
                const filteredTasks = tasks.filter((t) => t.id !== task.id)
                setTasks(filteredTasks)
            }
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{task.title}</h2>
                <button onClick={handleClick} className={styles.deleteBtn}>
                    <DeleteOutlined className={styles.deleteIcon} />
                </button>

            </div>

            <div className={styles.description}>{task.description}</div>

            <div className={styles.meta}>
                <span className={`${styles.status} ${styles[task.status.toLowerCase().replaceAll(' ', '')]}`}>
                    {task.status}
                </span>
                <span className={styles.category}>{task.category}</span>
                <span className={styles.category}>{task.priority}</span>
            </div>

            <div className={styles.footer}>
                <span className={styles.date}>{dayjs(task.createdAt).format('DD MMM YYYY')}</span>
                <Link className={styles.link} to={`/task/${task.id}`}>
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default TaskItem
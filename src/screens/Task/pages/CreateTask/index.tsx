import TaskForm from 'screens/Task/components/TaskForm'
import styles from '../../taskScreen.module.css'

const CreateTask = () => {
    return (
        <div className={styles.container}>
            <TaskForm action='createTask' />
        </div>
    )
}

export default CreateTask
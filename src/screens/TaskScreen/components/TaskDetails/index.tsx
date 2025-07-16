import { Link, useNavigate } from 'react-router-dom'
import urls from 'navigation/app.urls'
import { Input, Select, Button } from 'antd'
import styles from './taskDetails.module.css'
import { ITask } from 'types/global'
import { ChangeEvent, FormEvent, useContext } from 'react'
import TasksContext from 'shared/tasksContext'
import { categoryOptions, priorityOptions, statusOptions } from 'shared/constants'

interface ITaskDetailsProps {
    task: ITask,
    setTask: (task: ITask) => void,
}

const TaskDetails = ({ task, setTask }: ITaskDetailsProps) => {
    const navigate = useNavigate()
    const { tasks, setTasks } = useContext(TasksContext)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setTask({ ...task, [name]: value })
    }

    const handleSelectChange = (value: string, name: string) => {
        setTask({ ...task, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTasks(tasks.map(t => t.id === task.id ? task : t))
        navigate(urls.main)
    }


    return (
        <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Task Details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Заголовок:</label>
                    <Input
                        id="title"
                        value={task.title}
                        name="title"
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">Описание:</label>
                    <Input.TextArea
                        value={task.description}
                        id="description"
                        name="description"
                        onChange={handleChange}
                        className={styles.textarea}
                        style={{ resize: 'none' }}
                        rows={5}
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="category">Категория:</label>
                        <Select
                            value={task.category}
                            id="category"
                            options={categoryOptions}
                            onChange={(value) => handleSelectChange(value, 'category')}
                            className={styles.select}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="status">Статус:</label>
                        <Select
                            id="status"
                            value={task.status}
                            options={statusOptions}
                            onChange={(value) => handleSelectChange(value, 'status')}
                            className={styles.select}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="priority">Приоритет:</label>
                        <Select
                            value={task.priority}
                            id="priority"
                            options={priorityOptions}
                            onChange={(value) => handleSelectChange(value, 'priority')}
                            className={styles.select}
                        />
                    </div>
                </div>

                <div className={styles.formActions}>
                    <Link to={urls.main} className={styles.cancelLink}>
                        Отмена
                    </Link>
                    <Button type="primary" htmlType="submit" className={styles.submitButton}>
                        Сохранить изменения
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default TaskDetails
import { Link, useNavigate } from 'react-router-dom'
import urls from 'navigation/app.urls'
import { Input, Select, Button, DatePicker } from 'antd'
import styles from './taskForm.module.css'
import { ITask } from 'types/global'
import { useForm, Controller } from 'react-hook-form'
import { categoryOptions, priorityOptions, statusOptions } from 'shared/constants'
import useTaskFormAction from 'screens/Task/components/TaskForm/hooks/useTaskFormAction'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

interface ITaskFormProps {
    action: 'createTask' | 'updateTask',
    task?: ITask,
}

const TaskDetails = (props: ITaskFormProps) => {
    const defaultValues = props.task || {
        id: uuidv4(),
        title: '',
        description: '',
        status: 'To Do',
        category: 'Feature',
        priority: 'Low',
        createdAt: dayjs(),
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ITask>({
        defaultValues,
    })

    const { actions } = useTaskFormAction()
    const navigate = useNavigate()

    const onSubmit = (data: ITask) => {
        actions[props.action](
            data,
            () => navigate(urls.main),
        )
    }

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Task Details</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Заголовок:</label>
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required: 'Это поле обязательно',
                            minLength: {
                                value: 5,
                                message: 'Заголовок должен содержать минимум 5 символов',
                            },
                            maxLength: {
                                value: 25,
                                message: 'Заголовок должен быть не длиннее 25 символов',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="title"
                                className={styles.input}
                                placeholder="Введите заголовок..."
                                status={errors.title ? 'error' : ''}
                            />
                        )}
                    />
                    {errors.title && <span className={styles.error}>{errors.title.message}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">Описание:</label>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <Input.TextArea
                                {...field}
                                id="description"
                                className={styles.textarea}
                                style={{ resize: 'none' }}
                                rows={5}
                                placeholder="Введите описание..."
                            />
                        )}
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="category">Категория:</label>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    id="category"
                                    options={categoryOptions}
                                    className={styles.select}
                                    placeholder="Выберите категорию"
                                />
                            )}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="status">Статус:</label>
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    id="status"
                                    options={statusOptions}
                                    className={styles.select}
                                    placeholder="Выберите статус"
                                />
                            )}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="priority">Приоритет:</label>
                        <Controller
                            name="priority"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    id="priority"
                                    options={priorityOptions}
                                    className={styles.select}
                                    placeholder="Выберите приоритет"
                                />
                            )}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="createdAt">Дата создания:</label>
                        <Controller
                            name="createdAt"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    {...field}
                                    format="DD-MM-YYYY"
                                    allowClear={false}
                                    value={field.value ? dayjs(field.value) : null}
                                    onChange={(date) => field.onChange(date ? date.toDate() : null)}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={styles.formActions}>
                    <Link to={urls.main} className={styles.cancelLink}>
                        Отмена
                    </Link>
                    <Button type="primary" htmlType="submit">
                        Сохранить изменения
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default TaskDetails
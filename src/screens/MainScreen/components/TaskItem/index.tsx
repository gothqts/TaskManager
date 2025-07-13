import type {ITask} from "../../../../types/global.ts";
import styles from './taskItem.module.css'
import {Link} from "react-router-dom";

interface ITaskItemProps {
    task: ITask;
}

const TaskItem = (props: ITaskItemProps) => {
    const task = props.task;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>{task.title}</span>
                <span className={`${styles.status} ${styles[task.status.toLowerCase().replaceAll(' ', '')]}`}>
                    {task.status}
                </span>
            </div>
            <span className={styles.category}>{task.category}</span>
            <div className={styles.description}>{task.description}</div>
            <div className={styles.footer}>
                <span className={styles.priority}>{task.priority}</span>
                <Link className={styles.link} to={`/task/${task.id}`}>
                    Редактировать
                </Link>
            </div>
        </div>
    );
};

export default TaskItem;
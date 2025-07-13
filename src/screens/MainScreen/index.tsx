import styles from './mainScreen.module.css'
import TaskList from "./components/TaskList";
import FilterPanel from "./components/FilterPanel";
import TasksContext from "../../shared/tasksContext.ts";
import {useContext, useEffect, useState} from "react";
import {initialFilterState} from "../../shared/constants.ts";
import type {IFilters} from "../../types/global.ts";


const MainScreen = () => {
    const {tasks} = useContext(TasksContext);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [filters, setFilters] = useState<IFilters>(initialFilterState);

    useEffect(() => {
        const filtered = tasks.filter(task => {
            const statusMatch = !filters.status.value || task.status === filters.status.value;
            const priorityMatch = !filters.priority.value || task.priority === filters.priority.value;
            const categoryMatch = !filters.category.value || task.category === filters.category.value;

            return statusMatch && priorityMatch && categoryMatch;
        });
        setFilteredTasks(filtered);
    }, [tasks, filters]);


    const handleChange = (value: string, name: keyof IFilters) => {
        setFilters((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                value,
            }
        }));
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Task Manager</h1>
            <FilterPanel filters={filters} onChange={handleChange}/>
            {filteredTasks.length > 0 ? (
                <TaskList filteredTasks={filteredTasks}/>
            ) : <div className={styles.emptyTasks}>Упс, задач с указанными фильтрами не найдено.</div>}

        </div>
    );
};

export default MainScreen;
import styles from './mainScreen.module.css'
import TaskList from './components/TaskList'
import FilterPanel from './components/FilterPanel'
import { useEffect, useState } from 'react'
import { initialFilterState } from 'shared/constants'
import { IFilters } from 'types/global'
import useHttpLoaderWithServerErr from 'shared/hooks/httpLoader/useHttpLoaderWithServerErr'
import { mainApi } from 'screens/Main/main.api'
import urls from 'navigation/app.urls'
import { Link } from 'react-router-dom'
import { Button, Input } from 'antd'
import { useAtom } from 'jotai'
import LoaderPage from 'shared/LoaderPage'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import DateToggler from 'shared/Buttons/DateToggler'

const MainScreen = () => {
    const [tasks, setTasks] = useAtom(tasksAtom)
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filters, setFilters] = useState<IFilters>(initialFilterState)
    const [search, setSearch] = useState<string>('')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
    const { wait, loading } = useHttpLoaderWithServerErr()

    useEffect(() => {
        wait(mainApi.loadTasks(), (resp) => {
            if (resp.status === 'success') {
                setTasks(resp.body)
            }
        })
    }, [])

    useEffect(() => {
        let filtered = tasks.filter(task => {
            const searchMatch = task.title.toLowerCase().includes(search.toLowerCase())
            const statusMatch = !filters.status.value || task.status === filters.status.value
            const priorityMatch = !filters.priority.value || task.priority === filters.priority.value
            const categoryMatch = !filters.category.value || task.category === filters.category.value

            return statusMatch && priorityMatch && categoryMatch && searchMatch
        })

        // Сортировка по дате
        filtered = filtered.sort((a, b) => {
            const dateA = dayjs(a.createdAt).valueOf()
            const dateB = dayjs(b.createdAt).valueOf()
            console.log(dateA, dateB)
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })

        setFilteredTasks(filtered)
    }, [tasks, filters, search, sortOrder])

    const handleChange = (value: string, name: keyof IFilters) => {
        setFilters((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                value,
            },
        }))
    }

    if (loading) {
        return <LoaderPage />
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Task Manager</h1>

            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по названию"
                allowClear
                className={styles.searchInput}
                prefix={<SearchOutlined />}
            />

            <FilterPanel filters={filters} onChange={handleChange} />

            <div className={styles.actions}>
                <DateToggler sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <Link to={urls.createTask} className={styles.createTaskLink}>
                    <Button type="primary">Создать задачу</Button>
                </Link>
            </div>

            {filteredTasks.length > 0 ? (
                <TaskList filteredTasks={filteredTasks} />
            ) : <div className={styles.emptyTasks}>Упс, задач с указанными фильтрами не найдено.</div>}

        </div>
    )
}

export default MainScreen
import styles from './mainScreen.module.css'
import TaskList from './components/TaskList'
import FilterPanel from './components/FilterPanel'
import { useEffect, useState, useMemo } from 'react' // Добавлен useMemo
import { initialFilterState } from 'shared/constants'
import { IFilters } from 'types/global'
import useHttpLoaderWithServerErr from 'shared/hooks/httpLoader/useHttpLoaderWithServerErr'
import { mainApi } from 'screens/Main/main.api'
import urls from 'navigation/app.urls'
import { Link } from 'react-router-dom'
import { Button, Input, Empty } from 'antd'
import { useAtom } from 'jotai'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import DateToggler from 'shared/Buttons/DateToggler'
import { tasksAtom } from 'screens/Main/main.atom'
import ThreeDotsLoader from 'shared/LoaderPage/ThreeDotsLoader'
import useDebounce from 'shared/hooks/useDebounce'

const MainScreen = () => {
    const [tasks, setTasks] = useAtom(tasksAtom)
    const [filters, setFilters] = useState<IFilters>(initialFilterState)
    const [search, setSearch] = useState<string>('')
    const debouncedSearch: string = useDebounce(search, 300)
    const { wait, loading } = useHttpLoaderWithServerErr()
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    useEffect(() => {
        const params = {
            title: debouncedSearch,
            status: filters.status.value,
            priority: filters.priority.value,
            category: filters.category.value,
        }
        wait(mainApi.loadTasks(params), (resp) => {
            if (resp.status === 'success') {
                setTasks(resp.body)
            }
        })
    }, [filters, debouncedSearch])

    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => {
            const dateA = dayjs(a.createdAt).valueOf()
            const dateB = dayjs(b.createdAt).valueOf()
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })
    }, [tasks, sortOrder])

    const handleChange = (value: string, name: keyof IFilters) => {
        setFilters((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                value,
            },
        }))
    }

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    }

    const renderTasks = () => {
        if (loading) {
            return <ThreeDotsLoader />
        } else if (sortedTasks.length > 0) {
            return <TaskList filteredTasks={sortedTasks} />
        } else {
            return <Empty description='Упс, по вашему запросу ничего не найдено' image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Task Manager</h1>
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Поиск по названию'
                allowClear
                className={styles.searchInput}
                prefix={<SearchOutlined />}
            />

            <FilterPanel filters={filters} onChange={handleChange} />

            <div className={styles.actions}>
                <DateToggler onClick={toggleSortOrder} sortOrder={sortOrder} />
                <Link to={urls.createTask} className={styles.createTaskLink}>
                    <Button type='primary'>Создать задачу</Button>
                </Link>
            </div>

            {renderTasks()}
        </div>
    )
}

export default MainScreen

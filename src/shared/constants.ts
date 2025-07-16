export const statusOptions = [
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Done', label: 'Done' },
]

export const categoryOptions = [
    { value: 'Bug', label: 'Bug' },
    { value: 'Feature', label: 'Feature' },
    { value: 'Documentation', label: 'Documentation' },
    { value: 'Refactor', label: 'Refactor' },
    { value: 'Test', label: 'Test' },
]

export const priorityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
]


export const initialFilterState = {
    status: { value: '', label: 'Все' },
    priority: { value: '', label: 'Все' },
    category: { value: '', label: 'Все' },
}
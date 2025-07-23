import { Dayjs } from 'dayjs'


export interface ITask {
    id: string,
    title: string,
    description?: string,
    status: 'To Do' | 'In Progress' | 'Done',
    category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test',
    priority: 'Low' | 'Medium' | 'High',
    createdAt: Dayjs,
}


export interface IFilter {
    value: string;
    label: string;
}

export type IFilters = {
    status: IFilter,
    priority: IFilter,
    category: IFilter,
}

export interface ITask {
    id: string,
    title: string,
    description?: string,
    status: IStatus,
    category: ICategory,
    priority: IPriority,
}

export type IStatus = 'To Do' | 'In Progress' | 'Done'
export type ICategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test'
export type IPriority = 'Low' | 'Medium' | 'High'


export interface IFilter {
    value: string;
    label: string;
}

export type IFilters = {
    status: IFilter,
    priority: IFilter,
    category: IFilter,
}

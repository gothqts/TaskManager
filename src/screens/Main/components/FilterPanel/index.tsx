import styles from './filterPanel.module.css'
import { Select } from 'antd'
import { categoryOptions, priorityOptions, statusOptions } from 'shared/constants'
import { IFilters } from 'types/global'


interface FilterPanelProps {
    filters: IFilters,
    onChange: (value: string, name: keyof IFilters) => void,
}

const FilterPanel = ({ filters, onChange }: FilterPanelProps) => {


    return (
        <div className={styles.container}>
            <div className={styles.selectGroup}>
                <div className={styles.selectContainer}>
                    <Select
                        id="filterStatus"
                        className={styles.select}
                        options={[
                            { value: '', label: 'Все статусы' },
                            ...statusOptions,
                        ]}
                        value={filters.status.value}
                        onChange={(value) => onChange(value, 'status')}
                        placeholder="Статус"
                        size="middle"
                    />
                </div>

                <div className={styles.selectContainer}>
                    <Select
                        id="filterPriority"
                        className={styles.select}
                        options={[
                            { value: '', label: 'Все приоритеты' },
                            ...priorityOptions,
                        ]}
                        value={filters.priority.value}
                        onChange={(value) => onChange(value, 'priority')}
                        placeholder="Приоритет"
                        size="middle"
                    />
                </div>

                <div className={styles.selectContainer}>
                    <Select
                        id="filterCategories"
                        className={styles.select}
                        options={[
                            { value: '', label: 'Все категории' },
                            ...categoryOptions,
                        ]}
                        value={filters.category.value}
                        onChange={(value) => onChange(value, 'category')}
                        placeholder="Категория"
                        size="middle"
                    />
                </div>
            </div>

        </div>
    )
}

export default FilterPanel
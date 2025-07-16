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
            <div className={styles.selectContainer}>
                <label className={styles.label}
                       htmlFor="filterStatus">Статус:</label>
                <Select
                    id="filterStatus"
                    className={styles.select}
                    options={[
                        { value: '', label: 'Все' },
                        ...statusOptions,
                    ]}
                    value={filters.status.value}
                    onChange={(value) => onChange(value, 'status')}
                />
            </div>

            <div className={styles.selectContainer}>
                <label
                    className={styles.label}
                    htmlFor="filterPriority">Приоритет:</label>
                <Select
                    id="filterPriority"
                    className={styles.select}
                    options={[
                        { value: '', label: 'Все' },
                        ...priorityOptions,
                    ]}
                    value={filters.priority.value}
                    onChange={(value) => onChange(value, 'priority')}
                />
            </div>

            <div className={styles.selectContainer}>
                <label
                    className={styles.label}
                    htmlFor="filterCategories">Категория:</label>
                <Select
                    id="filterCategories"
                    className={styles.select}
                    options={[
                        { value: '', label: 'Все' },
                        ...categoryOptions,
                    ]}
                    value={filters.category.value}
                    onChange={(value) => onChange(value, 'category')}
                    style={{ width: 200 }}
                />
            </div>

        </div>
    )
}

export default FilterPanel
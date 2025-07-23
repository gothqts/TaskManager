import { Button } from 'antd'
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'

interface IProps {
    setSortOrder: (order: 'asc' | 'desc') => void,
    sortOrder: 'asc' | 'desc'
}

const DateToggler = ({ sortOrder, setSortOrder }: IProps) => {

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }

    return (

        <Button
            onClick={toggleSortOrder}
            icon={sortOrder === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
        >
            Сортировать по дате {sortOrder === 'asc' ? '↑' : '↓'}
        </Button>

    )
}

export default DateToggler
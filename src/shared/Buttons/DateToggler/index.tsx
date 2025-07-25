import { Button } from 'antd'
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'

interface IProps {
    onClick: () => void
    sortOrder: 'asc' | 'desc'
}

const DateToggler = ({ sortOrder, onClick }: IProps) => {


    return (

        <Button
            onClick={onClick}
            icon={sortOrder === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
        >
            Сортировать по дате {sortOrder === 'asc' ? '↑' : '↓'}
        </Button>

    )
}

export default DateToggler
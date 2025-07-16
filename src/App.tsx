import { RouterProvider } from 'react-router-dom'
import appRouter from 'navigation/app.router'
import { useState } from 'react'
import TasksContext from 'shared/tasksContext'
import type { ITask } from 'types/global'

const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
            {
                id: '1',
                title: 'Implement user authentication',
                description: 'Add login and registration functionality',
                status: 'In Progress',
                category: 'Feature',
                priority: 'High',
            },
            {
                id: '2',
                title: 'Fix navbar overlapping',
                description: 'Navbar overlaps content on mobile devices',
                status: 'To Do',
                category: 'Bug',
                priority: 'Medium',
            },
            {
                id: '3',
                title: 'Write API documentation',
                description: 'Document all endpoints for the REST API',
                status: 'Done',
                category: 'Documentation',
                priority: 'Medium',
            },
            {
                id: '4',
                title: 'Refactor legacy code',
                description: 'Improve performance of the old modules',
                status: 'In Progress',
                category: 'Refactor',
                priority: 'High',
            },
            {
                id: '5',
                title: 'Add unit tests',
                description: 'Write tests for the utility functions',
                status: 'To Do',
                category: 'Test',
                priority: 'Low',
            },

        ],
    )

    return (
        <TasksContext value={{ tasks: tasks, setTasks: setTasks }}>
            <RouterProvider router={appRouter} />
        </TasksContext>

    )
}

export default App
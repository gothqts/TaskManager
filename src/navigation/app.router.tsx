import urls from './app.urls'
import Main from '../screens/Main'
import { createBrowserRouter } from 'react-router-dom'
import CreateTask from 'screens/Task/pages/CreateTask'
import UpdateTask from 'screens/Task/pages/UpdateTask'

const appRouter = createBrowserRouter([
    {
        path: urls.main,
        element: <Main/>,
    },
    {
        path: urls.createTask,
        element: <CreateTask />,
    },
    {
        path: urls.updateTask,
        element: <UpdateTask />,

    },
])
export default appRouter
import { RouterProvider } from 'react-router-dom'
import appRouter from 'navigation/app.router'
import { Provider } from 'jotai'

const App = () => {

    return (
        <Provider>
            <RouterProvider router={appRouter} />
        </Provider>
    )
}

export default App
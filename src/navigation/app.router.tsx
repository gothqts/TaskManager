import urls from "./app.urls.ts";
import MainScreen from "../screens/MainScreen";
import TaskScreen from "../screens/TaskScreen";
import {createBrowserRouter} from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path: urls.main,
        element: <MainScreen/>,
    },
    {
        path: urls.task,
        element: <TaskScreen/>,
    }
])
export default appRouter;
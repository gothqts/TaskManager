import {createContext} from "react";
import type {ITask} from "../types/global.ts";

interface IContext {
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void,
}


const TasksContext = createContext<IContext>({
    tasks: [],
    setTasks: () => {
    },
});

export default TasksContext;
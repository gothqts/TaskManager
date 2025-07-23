import {atom} from 'jotai'
import { ITask } from 'types/global'


export const tasksAtom= atom<ITask[]>([])
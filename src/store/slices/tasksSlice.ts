import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type { RootState } from '..'

interface Task {
  id: number
  title: string
  completed: boolean
}

const taskAdapter = createEntityAdapter<Task>()

const initialState = taskAdapter.getInitialState()

const taskSlices = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: taskAdapter.addOne,
    removeTask: taskAdapter.removeOne,
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.entities[action.payload]
      if (task) task.completed = !task.completed
    },
  },
})

export const { selectAll: selectAllTasks } = taskAdapter.getSelectors(
  (state: RootState) => state.tasks
)

export const { addTask, removeTask, toggleTask } = taskSlices.actions
export default taskSlices.reducer

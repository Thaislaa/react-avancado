import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Task {
    id: number,
    title: string,
    completed: boolean
}

const initialState: Task[] = [
    {
        id: 1,
        title: "Estudar Redux Toolkit",
        completed: false
    },
    {
        id: 2,
        title: "Estudar React",
        completed: false
    }
]

const taskSlices = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.find(t => t.id === action.payload);
            if (task) task.completed = !task.completed
        }
    }
})

export const { addTask, removeTask, toggleTask } = taskSlices.actions
export default taskSlices.reducer

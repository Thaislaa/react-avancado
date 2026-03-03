import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { addTask, removeTask } from "../store/slices/tasksSlice";

export function TasksList() {
    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch();
    const [taskTitle, setTaskTitle] = useState("");

    function handleAddTask() {
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            completed: false
        }
        dispatch(addTask(newTask));
        setTaskTitle("");
    }

    function handleRemoveTask(id: number) {
        dispatch(removeTask(id))
    }

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <input type="text" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} placeholder="Digite uma tarefa" />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
            <ul>
                {tasks.map(task => (
                    <li>
                        <span>{task.title}</span>
                        <button onClick={() => handleRemoveTask(task.id)}>Remover tarefa</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
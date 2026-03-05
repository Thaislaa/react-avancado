import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  addTask,
  removeTask,
  selectAllTasks,
  toggleTask,
} from '../store/slices/tasksSlice'

export function TasksList() {
  const tasks = useAppSelector(selectAllTasks)
  const dispatch = useAppDispatch()
  const [taskTitle, setTaskTitle] = useState('')

  function handleAddTask() {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    }
    dispatch(addTask(newTask))
    setTaskTitle('')
  }

  function handleRemoveTask(id: number) {
    dispatch(removeTask(id))
  }

  function handleToggleTask(id: number) {
    dispatch(toggleTask(id))
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.title}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>
              Remover tarefa
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

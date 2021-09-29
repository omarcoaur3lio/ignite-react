import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import { usetheme } from '../Hooks/useTheme';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const {theme} = usetheme();

  function handleCreateNewTask() {
    if (newTaskTitle.trim() === '') {
      return;
    } else {
      setTasks([...tasks, {
        id: Math.random(),
        title: newTaskTitle,
        isComplete: false
      }]);
    }

  }

  function handleToggleTaskCompletion(id: number) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <section className={`task-list container ${theme}`}>
      <header className={theme}>
        <h2 className={theme}>Minhas tasks</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            className={theme}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={theme}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p className={theme}>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16} />
              </button>
            </li>
          ))}

        </ul>
      </main>
    </section>
  )
}
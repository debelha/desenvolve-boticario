import { Plus, Check } from 'lucide-react';
import { ToDoItem } from './ToDoItem';
import { useState, type ChangeEvent } from 'react';

export function App() {
  const [newTodo, setNewTodo] = useState('');

  function handleChangeNewTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  const todos = [
    { id: 1, text: 'Design the new landing page', completed: false, createdAt: new Date() },
    { id: 2, text: 'Review pull requests', completed: true, createdAt: new Date(Date.now() - 86400000) },
    { id: 3, text: 'Plan team meeting agenda', completed: false, createdAt: new Date() }
  ];

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;
  
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="title">Tasks</h1>
          <p className="subtitle">Stay organized, stay productive</p>
          <div className="stats-pill">
            <span>{completedTodos} of {totalTodos} completed</span>
          </div>
        </header>

        {/* Add Todo Input */}
        <div className="add-wrapper">
          <input
            type="text"
            placeholder="Add a new task..."
            className="input"
            onChange={handleChangeNewTodo}
            value={newTodo}
          />
          <button className="add-btn" aria-label="Add todo">
            <Plus size={20} />
          </button>
        </div>

        {/* Todo List */}
        <div className="list">
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}

          {todos.length === 0 && (
            <div className="empty">
              <div className="empty-card">
                <div className="empty-circle">
                  <Check size={32} className="empty-icon" />
                </div>
                <p className="empty-title">No tasks yet</p>
                <p className="empty-subtitle">Add your first task above to get started</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <footer className="footer">
            <p className="footer-text">
              {0 === 0
                ? '🎉 All tasks completed! Great job!'
                : `${0 - 0} task${0 - 0 !== 1 ? 's' : ''} remaining`}
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;

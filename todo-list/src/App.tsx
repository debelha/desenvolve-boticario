import { Plus, Check, X, Edit3, Calendar } from 'lucide-react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
};

export function App() {
  const editingId = 0;
const todos = [
    { id: 1, text: 'Design the new landing page', completed: false, createdAt: new Date() },
    { id: 2, text: 'Review pull requests', completed: true, createdAt: new Date(Date.now() - 86400000) },
    { id: 3, text: 'Plan team meeting agenda', completed: false, createdAt: new Date() }
  ]
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="title">Tasks</h1>
          <p className="subtitle">Stay organized, stay productive</p>
          <div className="stats-pill">
            <span>0 of 0 completed</span>
          </div>
        </header>

        {/* Add Todo Input */}
        <div className="add-wrapper">
          <input
            type="text"
            placeholder="Add a new task..."
            className="input"
          />
          <button className="add-btn" aria-label="Add todo">
            <Plus size={20} />
          </button>
        </div>

        {/* Todo List */}
        <div className="list">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-card ${todo.completed ? 'is-completed' : ''}`}
            >
              <div className="row">
                {/* Checkbox */}
                <button
                  className={`checkbox ${todo.completed ? 'is-checked' : ''}`}
                  aria-pressed={todo.completed}
                  aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {todo.completed && <Check size={14} className="check-icon" />}
                </button>

                {/* Todo Content */}
                <div className="content">
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      className="edit-input"
                    />
                  ) : (
                    <div className="text-wrapper">
                      <p className={`text ${todo.completed ? 'text-completed' : ''}`}>
                        {todo.text}
                      </p>
                      <div className="meta">
                        <Calendar size={12} />
                        <span>{String(todo.createdAt)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                {editingId === todo.id ? (
                  <div className="actions show">
                    <button className="icon-btn success" aria-label="Save edit">
                      <Check size={16} />
                    </button>
                    <button className="icon-btn danger" aria-label="Cancel edit">
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="actions">
                    <button
                      className="icon-btn"
                      aria-label="Edit todo"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className="icon-btn danger"
                      aria-label="Delete todo"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
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

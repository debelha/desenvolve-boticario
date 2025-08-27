import { Calendar, Check, Edit3, X } from "lucide-react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
};

interface TodoProps {
    todo: Todo;
}

export function ToDoItem({ todo }: TodoProps) {
    return (
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
    )
}
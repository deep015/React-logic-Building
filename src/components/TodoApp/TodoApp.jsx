import React, { useState } from 'react';
import Taskitem from './Taskitem';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddtask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: task,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
    setTask('');
  };

  const handleDelete = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  };

  const toggleComplete = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updated);
  };

  const EditText = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newText) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, title: newText } : todo
    );
    setTodos(updated);
    setEditingId(null);
  };

  return (
    <div className="flex flex-col gap-2 p-4 max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 border p-2 rounded"
        />
        <button onClick={handleAddtask} className="bg-blue-500 text-black px-4 py-2 rounded">
          Add
        </button>
      </div>

      {todos.filter(Boolean).map(todo => (
        <Taskitem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          onDelete={handleDelete}
          ontoggleComplete={toggleComplete}
          onEditText={EditText}
          onSave={handleSave}
        />
      ))}
    </div>
  );
};

export default TodoApp;

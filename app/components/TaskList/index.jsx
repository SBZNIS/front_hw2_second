import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({tasks, onToggleTask, onDeleteTask }) => {
  // Render TaskItems using TaskItem component
  // Filter tasks by status here
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return <div className='text-white'>No tasks to display</div>;
  }
  return (
    <>
      <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
            <TaskItem 
              {...task} 
              onToggle={() => onToggleTask(task.id)} 
              onDelete={() => onDeleteTask(task.id)}
            />
            </li>
          ))}
        </ul>
    </>
  );
};

export default TaskList;

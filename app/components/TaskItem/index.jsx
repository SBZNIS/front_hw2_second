import React from 'react';
import Image from 'next/image';

const TaskItem = ({ id, text, completed, onToggle, onDelete}) => {
  // Component that shows each TaskItem
  console.log(id)
  return (
    <>
      <div className="flex items-center">
        <button 
        className="w-6 h-6 flex items-center justify-center mr-6"
        onClick={onToggle}  
        >
          <div className="form-control ">
            <label className="cursor-pointer label">
              <input type="checkbox"  className="checkbox checkbox-info" checked={completed} onChange={onToggle} />
            </label>
          </div>
        </button>
        
        <span className={`ml-2 ${completed ? 'line-through text-gray-500' : 'text-white'}`}>{text}</span>
      </div>
      <button onClick={onDelete} className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </>
  );
};

export default TaskItem;

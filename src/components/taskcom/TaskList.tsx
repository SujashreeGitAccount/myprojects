import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import Task from './Task';


const TaskList = () => {

    const { tasks, removeTask, findItem } = useContext(TaskListContext);
    return (

        <div>
            <ul className="list">
                {tasks.map((task: any) =>
                {
                    //return <Task task={task} key={task.id} />
                    return(
                    <li className="list-item">
                        <span>{task.title} </span>

                        
                            <button
                                className="btn-delete task-btn"
                                onClick={() => removeTask(task.id)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>{' '}
                            <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                                <i className="fas fa-pen"></i>
                            </button>
                        
                        </li>
                        )
                }
                )}
            </ul>
        </div>
    );

};

export default TaskList;
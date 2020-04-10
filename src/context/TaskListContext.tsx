import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import uuid from 'uuid';

interface IContextProps {
    tasks: any;
    addTask: any;
    removeTask: any;
    clearList: any;
    findItem: any;
    editTask: any;
    editItem: any;
}
export const TaskListContext = createContext({} as IContextProps);


const TaskListContextProvider = (props: {children : any} )=> {
	const [tasks, setTasks] = useState([
		{ title: "read book", id: 1 },
		{ title: "cook food", id: 2 },
		{ title: "do some code", id: 3 }

	]);
	const [editItem, setEditItem] = useState(null)


  
    // Add tasks
    const addTask = (title: any) => {
        setTasks([...tasks, { title, id: 4 }])
    };

    // Remove tasks
    const removeTask = (id: any) => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    // Clear tasks
    const clearList = () => {
        setTasks([])
    };

    // Find task
    const findItem = (id: any) => {
        const item = tasks.find(task => task.id === id)

        //setEditItem(item)
    };

    // Edit task
    const editTask = (title: any, id: any) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    };

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;
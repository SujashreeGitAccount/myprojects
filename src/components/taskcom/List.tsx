import * as React from 'react';
import { useContext } from 'react';
import TaskListContextProvider from '../../context/TaskListContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import Task from './Task';

const List = () => {


    return (
        <TaskListContextProvider>
            <div className="container">
            
                <div className="app-wrapper">
                    <div className="main">
                <Header />
                <div>
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
            </div>

            </div>
        </TaskListContextProvider>
    );
}
export default List;
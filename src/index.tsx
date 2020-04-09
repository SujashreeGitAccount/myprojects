import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import  Hello  from "./components/Hello";
import  Home  from "./components/Home";
import Test from "./components/Test";
import List from "./components/taskcom/List";
import { Root } from "./components/Root";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import UserTable from "./components/dashboard/UserTable";

import { Link } from 'react-router';
import allReducers from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserContext from './UserContext';
//import TaskList from './components/taskcom/TaskList';
import TaskListContextProvider from './context/TaskListContext';



const App = () => {

    const [value, setValue] = useState("hello everyone, this is from CONTEXT");

    return (
            <Router history={browserHistory}>

                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to={"/hello"}>Hello</Link>
                                </li>
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
            </nav>

            
                    <Route path={"/"} component={Test} />
                    <Route path={"hello"} component={Hello} />
                    <Route path={"home"} component={Home} />
                    <Route path={"login"} component={Login} />
                    <Route path={"dashboard"} component={Dashboard} />
                    <Route path={"usertable"} component={UserTable} />
                    <Route path={"list"} component={List} />
                    
            </Router>


        );
    }

const myStore = createStore(allReducers);
ReactDOM.render(
    
    <Provider store={myStore}>
        <App />
    </Provider>,

   document.getElementById('root'));


//class App extends React.Component {

//    //const[value: any, setValue: any]=useState("hello everyone, this is from CONTEXT");

//    render() {
//        return (
//            <Router history={browserHistory}>

//                <nav className="navbar navbar-default">
//                    <div className="container">
//                        <div className="navbar-header">
//                            <ul className="nav navbar-nav">
//                                <li>
//                                    <Link to={"/hello"}>Hello</Link>
//                                </li>
//                                <li>
//                                    <Link to={"/login"}>Login</Link>
//                                </li>

//                            </ul>
//                        </div>
//                    </div>
//                </nav>

//                <Route path={"/"} component={Hello} />
//                    <Route path={"hello"} component={Hello} />
//                    <Route path={"home"} component={Home} />
//                    <Route path={"login"} component={Login} />
//                    <Route path={"dashboard"} component={Dashboard} />
//                    <Route path={"usertable"} component={UserTable} />
                
              
//            </Router>
           

//        );
//    }
//}
//const myStore = createStore(allReducers);
//ReactDOM.render(
//    <UserContext.Provider value="hi from context">
//        <App />
//        </UserContext.Provider>,
//    /*<Provider store={myStore}>
//        <App />
//    </Provider>,*/
//   document.getElementById('root'));

//serviceWorker.unregister();
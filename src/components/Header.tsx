import React from 'react';
import { Link } from 'react-router';

export const Header = (props:any) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to={"/hello"}>Hello</Link>
                            <Link to={"/login"}>Login</Link>
                        </li>
                       
                        </ul>
                    </div>
                </div>
            </nav>);

    
}
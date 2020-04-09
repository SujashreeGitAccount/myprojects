import React from 'react';
import { Header } from './Header';

export class Root extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="cpl-xs-10 cpl-xs-offset-1">
                        <Header/>
                    </div>
                    <div className="cpl-xs-10 cpl-xs-offset-1">
                        
                    </div>
                </div>
                <div className="row">
                </div>
                </div>
            );
    }

}
import * as React from 'react';
import { useContext } from 'react';
import UserContext from '../UserContext';
import Hello from './Hello';

const Test = () => {

    
    return (
        <UserContext.Provider value="Hi from context">
            <div>
                <Hello />

            </div>
        </UserContext.Provider>
    );
    }
    export default Test;
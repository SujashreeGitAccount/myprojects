import * as React from 'react';
import { useContext } from 'react';
import UserContext from '../UserContext';
import Test from './Test';

const Hello = () => {

    const msg = useContext(UserContext);
    return (
        
        <div>
            <div>This is hello Page</div>
            <div>{msg}</div>
        </div> 
       
    );

    /*const { value, setValue } = useContext(UserContext);
    const msg = useContext(UserContext);
    return (
        <div>
            <h1>This is a HELLO page</h1>
            <div>{msg}</div>
            <button onClick={()=>setValue("value changed")}>change</button>
        </div>
    );*/
    
}
export default Hello;
import * as React from 'react';
import { browserHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import { useContext } from 'react';
import UserContext from '../UserContext';

//export class Home extends React.Component {
const Home = () => {
    const pageNavigation = () => {

        browserHistory.push("/hello");
    };

    const msg = useContext(UserContext);

    //============hoooking==============
    const counter = useSelector((state: any) => state.counter);
   

    const dispatch = useDispatch();
    //render() {
    return (
        <div>
            
            <Button
                className="btn btn-primary"
                onClick={pageNavigation}>
                Go To Hello Page !
                        </Button>

            
            <div>Counter is {counter}</div>
            <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
    );
    //}
}
export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    withStyles,
    WithStyles,
    Button,
} from '@material-ui/core';
import _ from 'lodash';
import { setLogout } from '../../actions';
import { browserHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const userstate = {
    datarecords: []
};

const UserTable = (state: any) => {

   /* const logstate = useSelector((state: any) => state.isLogged);
    console.log("======TOKEN=======");
    console.log(logstate.token);
    const users: any[] = [];
    console.log("======AUTHORIZATION=======");
    console.log('Bearer ' + logstate.token);
    axios.defaults.headers.common['Authorization'] = 'Bearer '+logstate.token;
    axios.get('https://localhost:44391/api/Dashboard')
        .then(response => {
            
            users.push(response.data);
            console.log(users);
            
            userstate.datarecords = users[0];
            console.log("========DATA=======");
            console.log(userstate.datarecords);
            
        })
        .catch(error => {

        })*/
    const [users, setUsers] = useState([]);
    const userdata: any[] = [];
    const logstate = useSelector((state: any) => state.isLogged);
    useEffect(() => {
        
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + logstate.token;

        if (logstate.token == null) {
            browserHistory.push("/Login");
        }
        else {
            axios.get('https://localhost:44391/api/Dashboard')
                .then(response => {
                    setUsers(response.data);
                    //console.log(response.data);
                })
                .catch(error => {

                })
        }
        
    })

    const dispatch = useDispatch();
    const pageNavigation = () => {
        dispatch(setLogout());
        browserHistory.push("/login");
    };
    return (
        <div>
            <Button
                onClick={pageNavigation}>
                LOGOUT
            </Button>
        <Paper >
            
            <h2>Employee List</h2>

                <Table>
                    <TableHead>

                        <TableRow>
                            <TableCell><strong>Id</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Username</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((u, index) => {
                            return <Tr key={index} user={u}/>
                        })}
                    </TableBody>
            </Table>
        </Paper>
        </div>
    );
}
const Tr = ({ user }: { user: any }) => {
    return (
        <TableRow>
            <TableCell>{user.user_id}</TableCell>
            <TableCell>{user.fullname}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.useremail}</TableCell>
        </TableRow>)
}
export default UserTable;



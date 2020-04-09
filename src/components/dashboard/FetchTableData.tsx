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
} from '@material-ui/core';
import _ from 'lodash';
import employees from '../../data/employees.json';
import { setDashboardSuccess, setDashboardError } from '../../actions';

import { browserHistory } from 'react-router';

export interface IState {
    apiurl: string;
    datarecords: any[];
    datacolumns: any[];
}

export default class FetchTableData extends React.Component{

    
    state = {
        datarecords: [],
    }
    

    componentDidMount() {
        
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InN1amFzaHJlZSIsIlBhc3N3b3JkIjoicGFzcyIsIm5iZiI6MTU4NjI1NjE3MCwiZXhwIjoxNTg2MjU2NzcwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM5IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzOSJ9.q1UonJAHcvxq5vYblqqD5tk7l9wtesYz8JaIZy_vtlE';

        axios.get('https://localhost:44391/api/Dashboard')
            .then(response => {

                this.setState({ datarecords: response.data });
                console.log(this.state.datarecords);
                
            })
            .catch(error => {
               
            })
    }
     buttonClicked=()=>{
         browserHistory.push("/login");
     }
    render() {
        
        const datarecords = this.state.datarecords;
        
        return (
           
            <Paper >
                <button onClick={this.buttonClicked}>logout</button>
                <h2>Employee List</h2>
               
            <Table >
                    <TableHead>

                    <TableRow>
                            <TableCell><strong>Id</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Username</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {datarecords.map(row => {
                            return (

                                <TableRow key={row["user_id"]}>
                                    <TableCell>{row["user_id"]}</TableCell>
                                    <TableCell>{row["fullname"]}</TableCell>
                                    <TableCell>{row["username"]}</TableCell>
                                    <TableCell>{row["useremail"]}</TableCell>
                                    
                                </TableRow>
                            );
                        })}
                    </TableBody>   
            </Table>
        </Paper>
            
        );
    }
}
//export default FetchTableData;
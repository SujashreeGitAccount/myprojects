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
import React from 'react';
import  FetchTableData  from './FetchTableData';
import UserTable from './UserTable';
import { useSelector, useDispatch } from 'react-redux'; 

let id = 0;
const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
};


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: 700,
        },
    });


interface Props extends WithStyles<typeof styles> {
    hi: string;
}

// Here's the component, a stateless functional component that expects to receive props that match
// the 'Props' interface. Since it is an SFC we don't write 'this.props', it is just 'props'.
const Dashboard: React.SFC<Props> = props => {
    const { classes } = props;

    return (
        <UserTable />

    );

};

// instrument the component with the CSS styles defined above, and export it.
export default Dashboard;
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from '@testing-library/react';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        //  minWidth: 700,
        //  display: "flex",
        // justifyContent: "flex-start"
         width: '100%',
        //  display: 'flex',
        //  justifyContent: 'center'
        // justifyContent: 
        margin: '0',
        padding: '0',
        border: '0',
        // backgroundColor: 'rgb(235,235,235)' 
       
    },
});

export function Tables({ continent }) {


    const classes = useStyles();
    // console.log(continent);
    if (continent[0]==='') {
        // console.log("Loading");
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Continent</StyledTableCell>
                        <StyledTableCell align="right">Infected</StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {continent.map((cont) => (
                        <StyledTableRow key={cont[0]}>
                            <StyledTableCell component="th" scope="row">
                                {cont[0]}
                            </StyledTableCell>
                            <StyledTableCell align="right">{cont[1]}</StyledTableCell>
                            <StyledTableCell align="right">{cont[2]}</StyledTableCell>
                            <StyledTableCell align="right">{cont[3]}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
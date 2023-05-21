import React from 'react';
import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from '@mui/material';
import { demoTableStoryRows } from '../../data/data';
import moment from 'moment';

export interface TableProps extends MuiTableProps {
  dataRows: {
    name: string;
    adjudication: string;
    status: string;
    date: string;
    location: string;
  }[];
}

export const Table: React.FC<TableProps> = ({
  dataRows = demoTableStoryRows,
  ...props
}) => {
  return (
    <MuiTable {...props}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Adjudication</TableCell>
          <TableCell align="center">Status&nbsp;(g)</TableCell>
          <TableCell align="center">Date&nbsp;(g)</TableCell>
          <TableCell align="center">Location&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataRows.map((data) => {
          return (
            <TableRow>
              <TableCell key={data.name} align="center">
                {data.name}
              </TableCell>
              <TableCell key={data.adjudication} align="center">
                {data.adjudication}
              </TableCell>
              <TableCell key={data.status} align="center">
                {data.status}
              </TableCell>
              <TableCell key={data.date} align="center">
                {moment(data.date).format('MM/dd/yyyy')}
              </TableCell>
              <TableCell key={data.location} align="center">
                {data.location}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};

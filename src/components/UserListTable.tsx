import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Chip, IconButton } from '@mui/material';
import { Delete, Visibility } from '@mui/icons-material';
import { UsersType } from '../types/UserTypes';

type Props = { tableData: UsersType[] };

const UserListTable: React.FC<Props> = ({ tableData }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Plan</TableCell>
          <TableCell>Billing</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.currentPlan}</TableCell>
            <TableCell>{user.billing}</TableCell>
            <TableCell>
              <Chip
                label={user.status}
                color={
                  user.status === 'Active'
                    ? 'success'
                    : user.status === 'Pending'
                    ? 'warning'
                    : 'default'
                }
              />
            </TableCell>
            <TableCell>
              <IconButton color="primary"><Visibility /></IconButton>
              <IconButton color="error"><Delete /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserListTable;

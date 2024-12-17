import React, { useState, useEffect } from 'react';
import { CardContent, Grid, TextField, MenuItem } from '@mui/material';
import { UsersType } from '../types/UserTypes';

type TableFiltersProps = {
  setData: (data: UsersType[]) => void;
  tableData: UsersType[];
};

const TableFilters: React.FC<TableFiltersProps> = ({ setData, tableData }) => {
  const [role, setRole] = useState('');
  const [plan, setPlan] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const filteredData = tableData.filter(user => {
      return (
        (!role || user.role === role) &&
        (!plan || user.currentPlan === plan) &&
        (!status || user.status === status)
      );
    });

    setData(filteredData);
  }, [role, plan, status, tableData, setData]);

  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Select Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="">All Roles</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Author">Author</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Select Plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <MenuItem value="">All Plans</MenuItem>
            <MenuItem value="Enterprise">Enterprise</MenuItem>
            <MenuItem value="Team">Team</MenuItem>
            <MenuItem value="Company">Company</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Select Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">All Statuses</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default TableFilters;

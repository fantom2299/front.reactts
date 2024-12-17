import React, { useState } from 'react';
import { Card } from '@mui/material';
import TableFilters from '../components/TableFilters';
import UserListTable from '../components/UserListTable';
import { UsersType } from '../types/UserTypes';

// Исходные данные
const initialData: UsersType[] = [
  { id: 1, fullName: 'Galen Slixby', role: 'Editor', currentPlan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
  { id: 2, fullName: 'Halsey Redmore', role: 'Author', currentPlan: 'Team', billing: 'Auto Debit', status: 'Pending' },
  { id: 3, fullName: 'Marjory Sicely', role: 'Maintainer', currentPlan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
  { id: 4, fullName: 'Cyrill Risby', role: 'Maintainer', currentPlan: 'Team', billing: 'Manual PayPal', status: 'Inactive' },
];

const UserTablePage: React.FC = () => {
  const [data, setData] = useState<UsersType[]>(initialData); // Состояние для данных таблицы

  return (
    <Card>
      <h2 style={{ padding: '1rem' }}>Users List</h2>
      {/* Фильтры */}
      <TableFilters setData={setData} tableData={initialData} />

      {/* Таблица пользователей */}
      <UserListTable tableData={data} />
    </Card>
  );
};

export default UserTablePage;


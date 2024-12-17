import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const DashboardLayout = () => {
  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f4f4f4',
          overflow: 'auto',
          ml: { sm: 30, xs: 0 }, // Отступ для Sidebar
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;

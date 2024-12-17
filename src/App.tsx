// // import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// // import UserTablePage from './pages/UserTablePage';
// // import DashboardLayout from './components/DashboardLayout';

// const App = () => {
//   // const isAuthenticated = localStorage.getItem('isAuth'); // Проверка авторизации

//   return (

// <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </BrowserRouter>




//     // <BrowserRouter>
//     //   <Routes>
//     //     {/* Главная страница – логин */}
//     //     <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard/users" /> : <Login />} />
        
//     //     {/* Дашборд со Sidebar */}
//     //     <Route path="/dashboard/*" element={<DashboardLayout />}>
//     //       <Route path="users" element={<UserTablePage />} />
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>
//   );
// };

// export default App;


// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import UserTablePage from './pages/UserTablePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route path="users" element={<UserTablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

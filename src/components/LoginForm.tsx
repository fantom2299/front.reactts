// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Пример фейковой проверки
//     if (email === 'admin@example.com' && password === '07041986') {
//       localStorage.setItem('isAuth', 'true');
//       navigate('/dashboard/users'); // Переход на Users
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
//       <form onSubmit={handleLogin} className="p-8 bg-gray-700 rounded">
//         <h2 className="text-xl mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="text_input block w-full p-2 mb-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="block w-full p-2 mb-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className="text-red-500">{error}</p>}
//         <button type="submit" className="w-full bg-blue-500 p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Checkbox, Typography, InputAdornment, IconButton } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Фейковая авторизация
//     if (email === 'admin' && password === '07041986') {
//       localStorage.setItem('isAuth', 'true');
//       navigate('/dashboard'); // Переход на дашборд
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <Typography variant="h5" className="mb-4 text-center font-semibold">
//           👋 Welcome to sneat!
//         </Typography>
//         <Typography className="text-gray-500 mb-6 text-center">
//           Please sign-in to your account and start the adventure
//         </Typography>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <TextField
//             fullWidth
//             label="Email or Username"
//             variant="outlined"
//             placeholder="Enter your email or username"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type={showPassword ? 'text' : 'password'}
//             variant="outlined"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setShowPassword((prev) => !prev)}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <div className="flex items-center justify-between">
//             <div>
//               <Checkbox />
//               <label>Remember me</label>
//             </div>
//             <Typography className="text-blue-500 cursor-pointer">Forgot password?</Typography>
//           </div>

//           {error && <Typography color="error">{error}</Typography>}

//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Login
//           </Button>
//         </form>

//         <div className="text-center mt-4">
//           <Typography variant="body2">
//             New on our platform?{' '}
//             <span className="text-blue-500 cursor-pointer">Create an account</span>
//           </Typography>
//           <Typography variant="body2" className="mt-4">
//             or
//           </Typography>
//           <div className="flex justify-center space-x-4 mt-2">
//             <i className="fab fa-facebook text-blue-500 cursor-pointer"></i>
//             <i className="fab fa-twitter text-blue-400 cursor-pointer"></i>
//             <i className="fab fa-github text-gray-600 cursor-pointer"></i>
//             <i className="fab fa-google text-red-500 cursor-pointer"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { TextField, Button, Checkbox, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error,setError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Пример фейковой проверки
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('isAuth', 'true');
      navigate('/dashboard/users'); // Переход на Users
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <Typography variant="h4" fontWeight="bold">
            🚀 Welcome to sneat!
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Please sign-in to your account and start the adventure
          </Typography>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            fullWidth
            label="Email or Username"
            variant="outlined"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox size="small" />
              <Typography variant="body2">Remember me</Typography>
            </div>
            <Typography variant="body2" color="primary" className="cursor-pointer">
              Forgot password?
            </Typography>
          </div>
            {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>

        <div className="text-center mt-4">
          <Typography variant="body2">
            New on our platform?{' '}
            <span className="text-blue-500 cursor-pointer">Create an account</span>
          </Typography>
          <Typography variant="body2" className="mt-4">
            or
          </Typography>
          <div className="flex justify-center space-x-4 mt-2">
            <i className="fab fa-facebook text-blue-500 cursor-pointer"></i>
            <i className="fab fa-twitter text-blue-400 cursor-pointer"></i>
            <i className="fab fa-github text-gray-600 cursor-pointer"></i>
            <i className="fab fa-google text-red-500 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

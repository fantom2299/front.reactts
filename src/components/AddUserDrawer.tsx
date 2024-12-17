import React from 'react';
import {
  Drawer,
  Typography,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

// Типы для пропсов
interface AddUserDrawerProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: (data: any) => void; // Тип onSubmit
}

const AddUserDrawer: React.FC<AddUserDrawerProps> = ({ open, handleClose, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: '',
      role: '',
    },
  });

  const handleFormSubmit = (data: any) => {
    onSubmit(data); // Передаем данные в функцию onSubmit
    reset(); // Сбрасываем форму
    handleClose(); // Закрываем Drawer
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div style={{ width: 400, padding: 20 }}>
        <Typography variant="h6" gutterBottom>
          Add New User
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Поле Full Name */}
          <Controller
            name="fullName"
            control={control}
            rules={{ required: 'Full Name is required' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                label="Full Name"
                margin="normal"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          {/* Поле Role */}
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <TextField {...field} select fullWidth label="Role" margin="normal">
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
              </TextField>
            )}
          />

          {/* Кнопки Submit и Cancel */}
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default AddUserDrawer;

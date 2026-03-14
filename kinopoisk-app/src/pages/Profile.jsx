import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { setName } from '../store/userSlice';

const Profile = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const saveName = () => {
    if (input.trim()) {
      dispatch(setName(input.trim()));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Введите имя
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label="Ваше имя"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" onClick={saveName} disabled={!input.trim()}>
            Сохранить
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Profile;

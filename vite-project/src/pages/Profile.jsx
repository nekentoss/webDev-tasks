import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../store/userSlice';

const Profile = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const saveName = () => {
    dispatch(setName(input));
    setInput('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Введите имя</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={saveName}>Сохранить</button>
    </div>
  );
};

export default Profile;

import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({ label }) => {
  return <Button variant="contained">{label}</Button>;
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomButton;

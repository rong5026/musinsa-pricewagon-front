import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import './Custom.scss'

function CustomButton({ label, type, size, clickUrl }) {
  const handleClick= () => {
    window.location.href = clickUrl;
  };

  return (
    <AwesomeButton type={type} size={size} onPress={handleClick} className="my-custom-button">
      {label}
    </AwesomeButton>
  );
}

export default CustomButton;
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import './Custom.scss'

function CustomButton({ label, type, size }) {
  return (
    <AwesomeButton type={type} size={size} className="my-custom-button">
      {label}
    </AwesomeButton>
  );
}

export default CustomButton;
import React from 'react';
import { Button } from 'react-bootstrap';

function CommonButton({ text, onClick, variant }) {
  return (
    <div>
      <Button  variant={variant} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}

export default CommonButton;

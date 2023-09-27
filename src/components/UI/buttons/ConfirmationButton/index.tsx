import React, { ButtonHTMLAttributes } from 'react';
import style from './ConfirmationButton.module.scss';

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  index?: number;
  text: string;
  onChangeType?: (index: number) => void;
  apartmentsType?: number;
}

const ConfirmationButton: React.FC<PropTypes> = ({ index, text, apartmentsType, ...rest }) => {
  return (
    <button className={apartmentsType === index ? style._active : style.button} {...rest}>
      {text}
    </button>
  );
};

export default ConfirmationButton;

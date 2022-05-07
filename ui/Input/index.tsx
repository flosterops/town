import React, { ChangeEvent, ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/signup_mask.png';
import { Description } from '../Description';
import { InputMask, InputWrapper, StyledInput } from './styled';

interface IInput {
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input = ({ id, value, onChange, error }: IInput): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <>
      <InputWrapper>
        <InputMask src={bg.src} alt='input mask' />
        <StyledInput type='email' value={value} id={id} onChange={handleChange} />
      </InputWrapper>
      {error && <Description>{error}</Description>}
    </>
  );
};

export { Input };

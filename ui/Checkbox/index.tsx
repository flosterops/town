import React, { ChangeEvent, ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/signup_box.png';
import { Row } from '../Layout';
import { CheckboxLabel, CheckboxView, CheckboxWrapper, StyledCheckbox } from './styles';

interface ICheckbox {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

const Checkbox = ({ id, checked, onChange, label }: ICheckbox): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <Row>
      <Row componentWidth='auto' mright='15px'>
        <CheckboxWrapper componentWidth='38px' componentHeight='38px'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg.src} alt='checkbox mask' />
        </CheckboxWrapper>
        <StyledCheckbox checked={checked} id={id} type='checkbox' onChange={handleChange} />
        <CheckboxView onClick={() => onChange(!checked)}/>
      </Row>
      {label && <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>}
    </Row>
  );
};

export { Checkbox };

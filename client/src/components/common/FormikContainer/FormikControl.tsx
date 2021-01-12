import React from 'react';
import { Input } from '../Input';

type FormikControlProps = {
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
  type?: string;
  label?: string;
  name: string;
};

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;

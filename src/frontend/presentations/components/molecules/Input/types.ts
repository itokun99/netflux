import { ColorType, InputType } from '@general-types';

export interface InputProps {
  id?: string;
  type: InputType;
  label?: string;
  message?: React.ReactNode | string;
  messageColor?: ColorType;
  error?: boolean;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: string;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  onChange?: (value: string) => void;
  onChangeValue?: (value: string) => void;
  onClickIcon?: (value: string) => void;
  value?: string;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  required?: boolean;
  name?: string;
  disabled?: boolean;
  rows?: number;
  icon?: string | React.ReactNode;
  hideIcon?: boolean;
  iconAlign?: 'start' | 'end',
  size?: 'small' | 'default' | 'large'
};

export interface InputRefHandle {
  value: string,
  focus: () => void;
  blur: () => void;
};
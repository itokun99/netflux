import React, { useId, memo, forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { InputProps, InputRefHandle } from './types';
import {
  InputIcon,
  Label,
  Message,
  NativeInput,
  FieldWrapper,
  NativeTextArea,
  Wrapper
} from './styled';

import { getIconSize } from './utils';

const Input: React.ForwardRefRenderFunction<InputRefHandle, InputProps> = ({
  id,
  label,
  type = 'text',
  message,
  messageColor,
  error,
  className,
  style,
  placeholder,
  value,
  defaultValue,
  maxLength,
  minLength,
  max,
  min,
  required,
  name,
  disabled,
  rows,
  icon,
  hideIcon,
  iconAlign,
  size,
  onBlur,
  onFocus,
  onChange,
  onChangeValue,
  onClickIcon
}, ref) => {

  // state / hook / other variable definitions
  const _uniqueId = useId();
  const uniqueId = id || _uniqueId;
  const componentId = `input-${uniqueId}`;
  const fieldId = `input-field-${uniqueId}`;

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const fieldRef = useRef(inputRef.current || textAreaRef.current);
  const wrapperRef = useRef(null);

  const iconSize = getIconSize(size);

  // function definitions

  const getValue = () => {
    return fieldRef.current?.value || '';
  }

  const focus = () => {
    if (fieldRef.current) fieldRef.current.focus();
  }

  const blur = () => {
    if (fieldRef.current) fieldRef.current.blur();
  }

  const handleBlur = () => {
    const val = getValue();
    if (onBlur) onBlur(val);
    if (onChangeValue) onChangeValue(val);
  }

  const handleFocus = () => {
    const val = getValue();
    if (onFocus) onFocus(val);
  }

  const handleChange = () => {
    const val = getValue();
    if (onChange) onChange(val);
  }

  const handleToggleShowPassword = () => {
    setShowPassword(show => !show);
  }

  const handleClickIcon = () => {
    focus();
    if (onClickIcon) onClickIcon(getValue());
  }

  useImperativeHandle(ref, () => {
    return {
      value: getValue(),
      focus,
      blur
    }
  }, []);

  useEffect(() => {
    fieldRef.current = type === 'textarea' ? textAreaRef.current : inputRef.current;
  }, [type]);

  const renderIcon = () => {
    if (hideIcon) return null;

    if (type === 'password') {
      return (
        <InputIcon
          name={showPassword ? 'ic-eye-close' : 'ic-eye-open'}
          size={iconSize}
          onClick={handleToggleShowPassword}
          isPassword
          iconAlign={iconAlign}
        />
      )
    }

    if (!icon) return null;

    if (typeof icon === 'string') {
      return (
        <InputIcon
          name={icon}
          size={iconSize}
          isPassword={false}
          iconAlign={iconAlign}
          onClick={handleClickIcon}
        />
      )
    }

    return icon;
  }

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <NativeTextArea
          id={fieldId}
          name={name}
          ref={textAreaRef}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          error={error}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          rows={rows}
          iconAlign={iconAlign}
          htmlSize={size}
          {...(value && typeof value === 'string' ? { value } : { defaultValue })}
        />
      )
    }

    return (
      <>
        <NativeInput
          id={fieldId}
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          error={error}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          required={required}
          disabled={disabled}
          iconAlign={iconAlign}
          // size={size}
          htmlSize={size}
          icon={icon}
          {...(value && typeof value === 'string' ? { value } : { defaultValue })}
        />
        {renderIcon()}
      </>
    )
  }

  return (
    <Wrapper id={componentId} ref={wrapperRef} className={className} style={style}>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      <FieldWrapper>
        {renderField()}
      </FieldWrapper>
      {message && <Message color={error ? 'error' : messageColor}>{message}</Message>}
    </Wrapper>
  )
}

export default memo(forwardRef(Input))
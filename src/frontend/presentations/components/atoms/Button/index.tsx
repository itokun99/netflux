import { memo } from 'react';
import { ColorType } from '@general-types';
import { ButtonProps } from './types';
import { Btn, BtnIcon, TextContent } from './styled';



const getBtnIconColor = (variant?: string, color?: ColorType) => {
  if (variant === 'outlined') {
    return color;
  }
  return ['primary', 'success', 'error', 'dark'].includes(color || '') ? 'light' : 'dark';
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  size = 'default',
  icon,
  onClick
}) => {

  const btnIconColor = getBtnIconColor(variant, color);
  const btnIconSize = 24;

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      return (
        <BtnIcon
          name={icon}
          size={btnIconSize}
          color={btnIconColor}
        />
      )
    }
    return icon;
  }

  const renderContent = () => {
    if (icon) {
      return (
        <>
          {renderIcon()}
          <TextContent element='span' color={btnIconColor}>{children}</TextContent>
        </>
      )
    }

    return children;
  }

  return (
    <Btn
      type={type}
      color={color}
      variant={variant}
      size={size}
      icon={icon}
      onClick={onClick}
    >
      {renderContent()}
    </Btn>
  )
}

export default memo(Button);
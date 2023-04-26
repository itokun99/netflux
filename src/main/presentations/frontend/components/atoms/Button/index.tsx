import { memo } from 'react';
import { ButtonProps } from './types';
import { Btn, BtnIcon, TextContent, BtnLoader } from './styled';
import { getBtnIconColor } from './utils';




const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  size = 'default',
  icon,
  block,
  disabled,
  loading,
  loadingText = 'Loading...',
  onClick,
}) => {

  const btnIconColor = getBtnIconColor(variant, color);
  const btnIconSize = 24;

  const renderIcon = () => {
    if (!icon) return null;

    if (loading) return <BtnLoader size={btnIconSize} color={color} />

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
          <TextContent element='span' color={btnIconColor}>{loading ? loadingText : children}</TextContent>
        </>
      )
    }

    return loading ? loadingText : children;
  }

  return (
    <Btn
      type={type}
      color={color}
      variant={variant}
      size={size}
      icon={icon}
      onClick={!disabled && !loading ? onClick : undefined}
      block={block}
      disabled={disabled}
      loading={loading}
    >
      {renderContent()}
    </Btn>
  )
}

export default memo(Button);
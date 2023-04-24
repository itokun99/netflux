import { memo } from 'react';
import { MenuItem } from './_components';
import { AppMenuProps } from './types';
import { Wrapper } from './styled';

// main component
const AppMenu: React.FC<AppMenuProps> = ({
  items,
  className,
  style
}) => {
  return (
    <Wrapper className={className} style={style}>
      {items.map(({ id, title, href }) => (
        <MenuItem key={`app-menu-item-${id}`} title={title} href={href}>{title}</MenuItem>
      ))}
    </Wrapper>
  )
}

export default memo(AppMenu);
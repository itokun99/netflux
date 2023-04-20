import { memo } from 'react';
import styled from 'styled-components';
import { MenuItem } from './_components';
import { MenuItemInterface } from '@general-types';
import { AppContainerEnum } from '@styles/matrix';

// typee definitions
export interface AppMenuProps {
  items: MenuItemInterface[];
  className?: string;
  style?: React.CSSProperties;
}

// styled definitions
const Wrapper = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
`;

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
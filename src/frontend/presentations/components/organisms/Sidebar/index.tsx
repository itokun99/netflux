import { memo } from 'react';
import IconButton from '@components/atoms/IconButton';
import Text from '@components/atoms/Text';
import { SidebarProps } from './types';
import {
  Backdrop,
  BottomSection,
  Menu,
  MiddleSection,
  TopSection,
  Wrapper
} from './styled';

const Sidebar: React.FC<SidebarProps> = ({
  menus,
  show,
  onClose
}) => {
  if (!show) return null

  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>
        <TopSection>
          <IconButton
            icon='ic-close'
            size='small'
            variant='outlined'
            color='primary'
            onClick={onClose}
          />
        </TopSection>
        <MiddleSection>
          <Menu items={menus} />
        </MiddleSection>
        <BottomSection>
          <Text color="dark" element="p">Netflux | Movie for Freedom @ 2023</Text>
        </BottomSection>
      </Wrapper>
    </>
  )
}

export default memo(Sidebar);
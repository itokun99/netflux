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
  variant = 'show-hide',
  position = 'right',
  onClose,
  showTopSection = true,
  showBottomSection = true
}) => {
  if (!show) return null

  const renderBackdrop = () => {
    if (variant !== 'show-hide') return null;

    return <Backdrop onClick={onClose} />
  }

  const renderCloseButton = () => {
    if (variant !== 'show-hide') return null;

    return (
      <IconButton
        icon='ic-close'
        size='small'
        variant='outlined'
        color='primary'
        onClick={onClose}
      />
    )
  }

  return (
    <>
      {renderBackdrop()}
      <Wrapper
        variant={variant}
        position={position}
      >
        {showTopSection && (
          <TopSection>
            {renderCloseButton()}
          </TopSection>
        )}
        <MiddleSection>
          <Menu items={menus} />
        </MiddleSection>
        {showBottomSection && (
          <BottomSection>
            <Text color="dark" element="p">Kerja Koding 2023</Text>
          </BottomSection>
        )}
      </Wrapper>
    </>
  )
}

export default memo(Sidebar);
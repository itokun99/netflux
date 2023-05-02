import { memo, useMemo, useEffect, useRef, useReducer, Reducer } from 'react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { USER_MENUS } from '@configs/menu';
import Button from '@components/atoms/Button';
import IconButton from '@components/atoms/IconButton';
import { AppContainerEnum } from '@styles/matrix';
import useWindowSize from '@hooks/useWindowSize';
import { toggleBodyScroll } from '@frontend/utils/helper';
import Sidebar from '../Sidebar';
import AppMenu from '../AppMenu';
import Avatar from '@components/atoms/Avatar';

import {
  Wrapper,
  AppLogo,
  Container,
  LeftSection,
  RightSection,
  SearchBar,
  ActionButtonWrapper,
  SearchBarForm
} from './styled';

import { appbarState, appbarReducer } from './states';
import { AppbarProps } from './types';





// main component
const Appbar: FC<AppbarProps> = ({
  showLogo = true,
  fullContainer = false,
  showActionButton = false,
  showMenu = false,
  showSearchbar = false,
  user
}) => {

  // memo
  const menus = useMemo(() => USER_MENUS, []);
  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  // reducer
  const [state, dispatch] = useReducer(appbarReducer, appbarState)

  // states
  const { windowSize, isDesktopSize } = useWindowSize();

  // refs
  const portalContainer = useRef<HTMLElement>();

  // other variables
  const isShowLeftSection = windowSize.width && windowSize.width > AppContainerEnum.phoneLandscape ? true : state.showLeftSection;

  // methods / functions
  const handleFocusSearchBar = () => {
    dispatch({ type: 'searchbar-focus' });
  }

  const handleBlurSearchBar = () => {
    dispatch({ type: 'searchbar-blur' });
  }

  const handleToggleSidebar = () => {
    dispatch({ type: 'toggle-sidebar' });
  }

  useEffect(() => {
    const portalEl = document.getElementById('__next');
    if (portalEl) {
      portalContainer.current = portalEl;
      dispatch({ type: 'ready-sidebar' });
    }
  }, []);


  useEffect(() => {
    if (state.sidebarReady && portalContainer.current) {
      toggleBodyScroll(!state.showSidebar);
    }
  }, [state.sidebarReady, state.showSidebar]);

  // render functions
  const renderActionButtonDesktop = () => {

    if (isAuthenticated) {
      return (
        <Avatar
          variant='text'
          value="Indrawan Lisanto"
          size={36}
          rounded
        />
      )
    }

    if (!showActionButton) return null;

    return (
      <ActionButtonWrapper>
        <Button size="small" color="primary" variant="outlined">Masuk</Button>
      </ActionButtonWrapper>
    )
  }

  const renderSidebar = () => {
    if (!showMenu) return null;

    return (
      <>
        <ActionButtonWrapper>
          <IconButton onClick={handleToggleSidebar} variant='contained' color='primary' icon="ic-bar" size="small" />
        </ActionButtonWrapper>
        {state.sidebarReady && portalContainer.current && createPortal((
          <Sidebar
            show={state.showSidebar}
            onClose={handleToggleSidebar}
            menus={menus}
            variant='show-hide'
            position='right'
          />
        ), portalContainer.current)}
      </>
    )
  }

  return (
    <Wrapper>
      <Container fullWidth={fullContainer} >
        {isShowLeftSection && (
          <LeftSection>
            {showLogo && <AppLogo color="primary" size={34} />}
            {showMenu && isDesktopSize && <AppMenu items={menus} />}
          </LeftSection>
        )}
        <RightSection>
          {showSearchbar && (
            <SearchBarForm action='/search'>
              <SearchBar
                iconAlign='end'
                icon='ic-search'
                placeholder={`Cari "Junior Developer"`}
                type="search"
                size="small"
                name="q"
                onFocus={handleFocusSearchBar}
                onBlur={handleBlurSearchBar}
              />
            </SearchBarForm>
          )}
          {isDesktopSize ? renderActionButtonDesktop() : renderSidebar()}
        </RightSection>
      </Container>
    </Wrapper>
  )
}

export default memo(Appbar);



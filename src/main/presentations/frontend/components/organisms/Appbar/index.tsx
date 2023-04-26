import { memo, useMemo, useEffect, useRef, useReducer, Reducer } from 'react';
import { createPortal } from 'react-dom';
import { APP_MENUS } from '@static/menus';
import Button from '@components/atoms/Button';
import IconButton from '@components/atoms/IconButton';
import { AppContainerEnum } from '@styles/matrix';
import useWindowSize from '@hooks/useWindowSize';
import { toggleBodyScroll } from '@frontend/utils/helper';
import Sidebar from '../Sidebar';
import AppMenu from '../AppMenu';

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






// main component
function Appbar() {

  // memo
  const menus = useMemo(() => APP_MENUS, []);

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
    return (
      <ActionButtonWrapper>
        <Button size="small" color="primary" variant="outlined">Masuk</Button>
      </ActionButtonWrapper>
    )
  }

  const renderSidebar = () => {
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
          />
        ), portalContainer.current)}
      </>
    )
  }

  return (
    <Wrapper>
      <Container>
        {isShowLeftSection && (
          <LeftSection>
            <AppLogo color="primary" size={34} />
            {isDesktopSize && <AppMenu items={menus} />}
          </LeftSection>
        )}
        <RightSection>
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
          {isDesktopSize ? renderActionButtonDesktop() : renderSidebar()}
        </RightSection>
      </Container>
    </Wrapper>
  )
}

export default memo(Appbar);



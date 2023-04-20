import { memo, useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { APP_MENUS } from '@static/menus';
import Button from '@components/atoms/Button';
import IconButton from '@components/atoms/IconButton';
import { AppContainerEnum } from '@styles/matrix';
import useWindowSize from '@hooks/useWindowSize';
import { toggleBodyScroll } from '@utils';
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

// main component
function Appbar() {
  const bodyContainer = useRef<HTMLElement>();
  const portalContainer = useRef<HTMLElement>();
  const menus = useMemo(() => APP_MENUS, []);
  const [sidebarReady, setSidebarReady] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const { windowSize, isDesktopSize } = useWindowSize();

  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const [showLeftSection, setShowLeftSection] = useState(true);

  const isShowLeftSection = windowSize.width && windowSize.width > AppContainerEnum.phoneLandscape ? true : showLeftSection;

  const handleFocusSearchBar = () => {
    setSearchBarFocus(true);
  }

  const handleBlurSearchBar = () => {
    setSearchBarFocus(false);
  }

  const handleToggleSidebar = () => {
    setShowSidebar(show => !show);
  }

  useEffect(() => {
    setShowLeftSection(!searchBarFocus);
  }, [searchBarFocus]);

  useEffect(() => {
    const portalEl = document.getElementById('__next');
    if (portalEl) {
      portalContainer.current = portalEl;
      setSidebarReady(true);
    }
  }, []);


  useEffect(() => {
    if (sidebarReady && portalContainer.current) {
      toggleBodyScroll(!showSidebar);
    }
  }, [sidebarReady, showSidebar])

  return (
    <Wrapper>
      <Container>
        {isShowLeftSection && (
          <LeftSection>
            <AppLogo color="primary" />
            {isDesktopSize && <AppMenu items={menus} />}
          </LeftSection>
        )}
        <RightSection>
          <SearchBarForm action='/search'>
            <SearchBar
              iconAlign='end'
              icon='ic-search'
              placeholder="Search..."
              type="search"
              size="small"
              name="q"
              onFocus={handleFocusSearchBar}
              onBlur={handleBlurSearchBar}
            />
          </SearchBarForm>
          {isDesktopSize ? (
            <ActionButtonWrapper>
              <Button size="small" color="primary" variant="outlined">Masuk</Button>
            </ActionButtonWrapper>
          ) : (
            <>
              <ActionButtonWrapper>
                <IconButton onClick={handleToggleSidebar} variant='contained' color='primary' icon="ic-bar" size="small" />
              </ActionButtonWrapper>
              {sidebarReady && portalContainer.current && createPortal((
                <Sidebar
                  show={showSidebar}
                  onClose={handleToggleSidebar}
                  menus={menus}
                />
              ), portalContainer.current)}
            </>
          )}
        </RightSection>
      </Container>
    </Wrapper>
  )
}

export default memo(Appbar);



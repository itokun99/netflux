import { useState, useEffect } from 'react';
import { AppContainerEnum, BreakpointNameEnum } from '@styles/matrix';

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ width?: number, height?: number }>({
    width: undefined,
    height: undefined,
  });

  const getBreakpointName = (width?: number) => {
    if(width && width > AppContainerEnum.desktop) {
      return BreakpointNameEnum.largeDesktop;
    }

    if(width && width > AppContainerEnum.laptop) {
      return BreakpointNameEnum.desktop;
    }

    if(width && width > AppContainerEnum.tablet) {
      return BreakpointNameEnum.laptop;
    }

    if(width && width > AppContainerEnum.smallTablet) {
      return BreakpointNameEnum.tablet;
    }

    if(width && width > AppContainerEnum.phoneLandscape) {
      return BreakpointNameEnum.smallTablet;
    }

    if(width && width > AppContainerEnum.phonePotrait) {
      return BreakpointNameEnum.phoneLandscape;
    }

    if(width && width > AppContainerEnum.smallPhone) {
      return BreakpointNameEnum.phonePotrait;
    }

    if(width && width <= AppContainerEnum.smallPhone) {
      return BreakpointNameEnum.smallPhone;
    }

    return '';
  }

  const isDesktopSize = windowSize.width && windowSize.width > AppContainerEnum.tablet;
  const isMobileSize = !isDesktopSize;
  const breakpointName = getBreakpointName(windowSize.width);

  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    windowSize,
    isDesktopSize,
    isMobileSize,
    breakpointName
  };
}

export default useWindowSize;
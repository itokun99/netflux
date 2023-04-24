import { memo } from 'react';
import { LogoProps } from './types';
import { Wrapper, Link, LogoText } from './styled';
import LogoWebsite from '@assets/images/img-logo.svg';

const Logo: React.FC<LogoProps> = ({ color = 'primary', className, style }) => {
  return (
    <Wrapper className={className} style={style}>
      <Link href="/">
        <LogoWebsite fill="blue" height={32} />
      </Link>
    </Wrapper>
  )
}

export default memo(Logo);
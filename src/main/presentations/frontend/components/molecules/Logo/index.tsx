import { memo } from 'react';
import { LogoProps } from './types';
import { Wrapper, Link } from './styled';
import dynamic from 'next/dynamic';
const LogoPrimary = dynamic(() => import('@assets/images/img-logo.svg'), { ssr: true });
const LogoLight = dynamic(() => import('@assets/images/img-logo-light.svg'), { ssr: true });
const LogoDark = dynamic(() => import('@assets/images/img-logo-dark.svg'), { ssr: true })

const LOGOS = {
  'primary': LogoPrimary,
  'light': LogoLight,
  'dark': LogoDark
}


const Logo: React.FC<LogoProps> = ({ color = 'primary', className, style, size }) => {

  const width = Math.trunc((size && size * 2.75) || 0);

  const LogoSvg: any = LOGOS[color as keyof typeof LOGOS];

  return (
    <Wrapper className={className} style={style}>
      <Link href="/">
        <LogoSvg width={width} height={size} style={{ maxWidth: '100%' }} />
      </Link>
    </Wrapper>
  )
}

export default memo(Logo);
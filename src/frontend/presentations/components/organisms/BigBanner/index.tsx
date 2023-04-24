import { memo } from 'react';
import Button from '@components/atoms/Button';
import useWindowSize from '@hooks/useWindowSize';
import { BigBannerProps } from './types';
import {
  Wrapper,
  ActionButtonContainer,
  BannerContainer,
  BgOverlay,
  ContentWrapper,
  Description,
  Headline,
  Image,
  InfoContainer
} from './styled';
import { AppContainerEnum } from '@styles/matrix';



const BigBanner: React.FC<BigBannerProps> = ({
  headline,
  description,
  actionButtons = []
}) => {

  const { windowSize } = useWindowSize();
  const btnSize = windowSize.width && windowSize.width > AppContainerEnum.phoneLandscape ? 'default' : 'small';

  return (
    <Wrapper>
      <Image
        src="/assets/images/example-banner.png"
        alt="example-image"
        fill
      />
      <BgOverlay />
      <ContentWrapper>
        <BannerContainer>
          <InfoContainer>
            <Headline color="light" element='h2'>{headline}</Headline>
            <Description color="light">{description}</Description>
            <ActionButtonContainer>
              {actionButtons.map(({
                id,
                title,
                variant,
                color,
                icon,
                onClick
              }) => (
                <Button
                  key={`big-banner-key-${id}`}
                  size={btnSize}
                  icon={icon}
                  color={color}
                  variant={variant}
                >
                  {title}
                </Button>
              ))}
            </ActionButtonContainer>
          </InfoContainer>
        </BannerContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(BigBanner);
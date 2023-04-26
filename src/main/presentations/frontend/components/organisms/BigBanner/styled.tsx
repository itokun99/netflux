import styled from 'styled-components';
import NextImage from 'next/image';
import { AppContainerEnum, AppSpacingEnum } from '@styles/matrix';
import { FontSizeEnum } from '@styles/fonts';
import Text from '@components/atoms/Text';
import Container from '@components/atoms/Container';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 0;
  background-color: #dddddd;
  padding-bottom: 37.44%;

  @media screen and (max-width: ${AppContainerEnum.tablet}px) {
    padding-bottom: 50%;
  }

  @media screen and (max-width: ${AppContainerEnum.smallTablet}px) {
    padding-bottom: 75%;
  }

  @media screen and (max-width: ${AppContainerEnum.phonePotrait}px) {
    padding-bottom: 150%;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;
export const BannerContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${AppContainerEnum.phonePotrait}px) {
    align-items: end;
    padding-bottom: 64px;
  }
`;
export const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  max-width: 100%;
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.778467) 34.69%, rgba(0, 0, 0, 0.640242) 56.67%, rgba(0, 0, 0, 0.512034) 72.58%, rgba(0, 0, 0, 0) 100%);
`;
export const InfoContainer = styled.div`
  width: 100%;
  max-width: 375px;
`;
export const Headline = styled(Text)`
  font-size: ${FontSizeEnum.xxl}px;
  line-height: ${AppSpacingEnum.xxl + 8}px;
  margin-bottom: ${AppSpacingEnum.xl}px;
  margin-top: 0;

  @media screen and (max-width: ${AppContainerEnum.phoneLandscape}px) {
    font-size: ${FontSizeEnum.xl}px;
    line-height: ${AppSpacingEnum.xl + 8}px;
    margin-bottom: ${AppSpacingEnum.m}px
  }
`;
export const Description = styled(Text)`
  font-size: ${FontSizeEnum.m}px;
  line-height: ${AppSpacingEnum.xl}px;
  font-weight: 500;
  margin-bottom: ${AppSpacingEnum.xxl}px;

  @media screen and (max-width: ${AppContainerEnum.phoneLandscape}px) {
    font-size: ${FontSizeEnum.s}px;
    line-height: ${AppSpacingEnum.xl - 2}px;
    margin-bottom: ${AppSpacingEnum.xl}px
  }
`;
export const ActionButtonContainer = styled.div`
  display: flex;
  gap: ${AppSpacingEnum.m}px;
`;

export const Image = styled(NextImage)`
  object-fit: cover;
`
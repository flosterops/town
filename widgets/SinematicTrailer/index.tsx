import React, { ReactElement, useEffect, useRef, useState } from 'react';
// @ts-ignore
import topImage from 'public/assets/images/video_ol_top.png';
// @ts-ignore
import bottomImage from 'public/assets/images/video_ol_bottom.png';
// @ts-ignore
import placeholderImg from 'public/assets/images/video_bg_placeholder.jpeg';
// @ts-ignore
import playButtonImg from 'public/assets/images/video_play_button.png';
import {
  BottomBanner,
  CinematicDescription,
  PlayVideo,
  StyledCinematicTrailer,
  TopBanner,
  VideoPlaceholder,
} from './styles';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { ModalVideo, Video } from 'ui';

const CinematicTrailer = (): ReactElement => {
  const bottomBannerRef = useRef<HTMLImageElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize () {
      if (bottomBannerRef.current) {
        setHeight(bottomBannerRef.current?.height);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bottomBannerStyles = height ? { bottom: `${height / -2.7}px` } : {};

  return (
    <StyledCinematicTrailer componentHeight='100%'>
      <TopBanner src={topImage.src} alt='' />
      <Video />
      <ModalVideo open={open} setOpen={setOpen} />
      <VideoPlaceholder
        componentHeight='100%'
        image={placeholderImg.src}
        jc={JustifyContentTypes.center}
        ai={AlignItemsTypes.center}
      >
        <PlayVideo onClick={(): void => setOpen(true)} src={playButtonImg.src} alt='' />
        <CinematicDescription mtop='30px' fontSize={FontSizeTypes.l} uppercase>
          Watch trailer
        </CinematicDescription>
      </VideoPlaceholder>
      <BottomBanner style={bottomBannerStyles} ref={bottomBannerRef} src={bottomImage.src} alt='' />
    </StyledCinematicTrailer>
  );
};

export { CinematicTrailer };

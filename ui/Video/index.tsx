import React, { ReactElement } from 'react';
// @ts-ignore
import video from 'public/assets/videos/videoplayback.mp4';
import { StyledVideo, VideoWrapper } from './styles';

interface IVideo {
  width?: string;
  height?: string;
  isModal?: boolean;
  external?: boolean;
}

const Video = ({ width = '100%', height = '100%', isModal = false, external = false }: IVideo): ReactElement => {
  if (!external) {
    return (
      <StyledVideo autoPlay muted loop>
        <source src='https://webcdn.gamigo.com/landingpages/fantasy-town/videoplayback.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </StyledVideo>
    );
  }

  return (
    <VideoWrapper isModal={isModal} componentHeight='100%'>
      <iframe
        width={width}
        height={height}
        src='https://www.youtube-nocookie.com/embed/PsdD0bdBJTY?autoplay=1&controls=1&loop=1&playlist=PsdD0bdBJTY'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </VideoWrapper>
  );
};

export { Video };

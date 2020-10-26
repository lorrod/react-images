// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';

import { Div, Img } from '../primitives';
import { type PropsWithStyles } from '../types';
import { className } from '../utils';
import { getSource } from './component-helpers';
import componentBaseClassNames from './componentBaseClassNames';
import ReactPlayer from 'react-player';

type Props = PropsWithStyles & {
  data: Object,
  isFullscreen: boolean,
  isModal: boolean,
};

export const viewCSS = () => ({
  lineHeight: 0,
  position: 'relative',
  textAlign: 'center',
});

const viewBaseClassName = componentBaseClassNames.View;

const View = (props: Props) => {
  const { data, formatters, getStyles, index, isFullscreen, isModal } = props;
  const innerProps = {
    alt: formatters.getAltText({ data, index }),
    src: getSource({ data, isFullscreen }),
  };

  console.log(data, formatters, getStyles, index, isFullscreen, isModal);

  return (
    <Div
      css={getStyles(viewBaseClassName, props)}
      className={className(viewBaseClassName, { isFullscreen, isModal })}
    >
      <ReactPlayer
          url={"https://video.twimg.com/tweet_video/Eku-CH4X0AkN0ga.mp4"}
          controls = {true}
          config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              file: {
                forceVideo: true
              }
              }}
      />
    </Div>
  );
/*
  return (
    <Div
      css={getStyles(viewBaseClassName, props)}
      className={className(viewBaseClassName, { isFullscreen, isModal })}
    >
      <Img
        {...innerProps}
        className={className('view-image', { isFullscreen, isModal })}
        css={{
          height: 'auto',
          maxHeight: '100%',
          maxWidth: '100%',
          userSelect: 'none',
        }}
      />
    </Div>
  );
  */
};

export default View;

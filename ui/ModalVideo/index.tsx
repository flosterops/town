import React, { ReactElement, useEffect, useState } from 'react';
// @ts-ignore
import closeImg from 'public/assets/images/close_navbar_mobile.png';
import { Video } from 'ui/Video';
import { CloseVideoModal, ModalVideoWrapper } from './styles';

interface IModalVideo {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ModalVideo = ({ open, setOpen }: IModalVideo): ReactElement | null => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (open) {
      setRendered(open);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleClose = (): void => {
    setRendered(false);
    setTimeout((): void => {
      setOpen(false);
    }, 300);
  };

  return (
    <ModalVideoWrapper open={rendered} componentHeight='100%'>
      <CloseVideoModal onClick={handleClose}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={closeImg.src} alt='close video' />
      </CloseVideoModal>
      <Video isModal external />
    </ModalVideoWrapper>
  );
};

export { ModalVideo };

import React, { FormEvent, ReactElement, useState } from 'react';
// @ts-ignore
import bg from 'public/assets/images/newsletter_bg.png';
import { Checkbox, Input } from 'ui';
import {
  FormContainer,
  FormResult,
  InputContainer,
  StyledNewsletterForm,
} from './styles';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
import useRequest, { Statuses } from '../../helpers/use-request';
import { Loading } from '../../ui/Loading';
import { SubmitButton } from '../../ui/SubmitButton';
import { getSubscribeParams, validateEmail } from '../../helpers/getSubscribeParams';
import { NewsletterHeader } from './NewsletterHeader';
import Modal from '../Modal';
import { Agreement } from './Agreement';

const NewsletterForm = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [isModalOpened, openModal] = useState<boolean>(false);
  const request = useRequest();
  const label = 'PERSONAL INFORMATION COLLECTION AND PROCESSING AGREEMENT (REQUIRED)';
  function onSubmit (e: FormEvent) {
    e.preventDefault();
    if (checked && validateEmail(email)) {
      request.send(getSubscribeParams(email));
    }
  }
  return (
    <StyledNewsletterForm
      image={bg.src}
      ai={AlignItemsTypes.center}
      padding='40px'
      componentHeight='100%'
      componentWidth='100%'
    >
      <form onSubmit={onSubmit}>
        <FormContainer ai={AlignItemsTypes.center} componentWidth='100%'>
          <NewsletterHeader />
          <InputContainer componentWidth='auto' mtop='40px'>
            <Input id='email' value={email} onChange={(value: string): void => setEmail(value)} />
          </InputContainer>
          <InputContainer mtop='30px'>
            <Checkbox
              id='accept'
              checked={checked}
              onChange={(_: boolean): void => openModal(true)}
              label={label}
            />
          </InputContainer>
          <InputContainer mtop='30px' componentHeight='140px' jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            {request.status === Statuses.inProgress && <Loading />}
            {request.status === Statuses.init && <SubmitButton width='430px' />}
            {request.status === Statuses.successful
              && <FormResult doHyeonFont fontSize={FontSizeTypes.xl} uppercase color={colors.white}>Successful!</FormResult>
            }
            {request.status === Statuses.failed
              && <FormResult doHyeonFont fontSize={FontSizeTypes.xl} uppercase color={colors.black}>Something went wrong.</FormResult>
            }
          </InputContainer>
        </FormContainer>
      </form>
      <Modal opened={isModalOpened} onClose={() => openModal(false)}>
        <Agreement setChecked={() => {
          setChecked(true);
          openModal(false);
        }}/>
      </Modal>
    </StyledNewsletterForm>
  );
};

export { NewsletterForm };

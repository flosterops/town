import React from 'react';
import { ButtonWrapper, SubscriptionMessage, Wrapper } from './styles';
import { Statuses } from '../../helpers/use-request';
import { Loading } from '../../ui/Loading';
import { GenericButton } from '../../ui/GenericButton';

interface Props {
  close: () => void
  status: Statuses
}
export function DoubleOptIn ({ close, status }: Props) {
  return <Wrapper>
    {status === Statuses.inProgress && <Loading/>}
    {status === Statuses.failed && <SubscriptionMessage>Something went wrong.</SubscriptionMessage>}
    {status === Statuses.successful && <SubscriptionMessage>Thank you for signing up</SubscriptionMessage>}
    <ButtonWrapper>
      <GenericButton onClick={close}>Close</GenericButton>
    </ButtonWrapper>
  </Wrapper>
}

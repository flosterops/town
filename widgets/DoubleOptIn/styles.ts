import styled from 'styled-components';
// @ts-ignore
import bg from 'public/assets/images/subscription_overlay_bg.png';
import { BreakPoints, media } from '../../theme/responsive.theme';

export const Wrapper = styled.div`
  width: 484px;
  height: 310px;
  background: url(${bg.src});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  ${media.lessThan(BreakPoints.tablet)} {
    background: #171E0E;
    border: 2px solid #3E5723;
    width: 90vw;
    border-radius: 10px;
  }
`;

export const SubscriptionMessage = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 150px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

import styled from 'styled-components';
import { Column, Description, IDescription, ILayout, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';
import { fontSize } from 'theme/functions.theme';
import { FontSizeTypes } from 'models/layout.model';
import { StyledInput } from '../../ui/Input/styled';

interface IStyledNewsletterForm extends ILayout {
  image: string;
}

export const StyledNewsletterForm = styled(Column)<IStyledNewsletterForm>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: top;
  background-position-x: center;
  background-image: url('${(props: IStyledNewsletterForm): string => props.image}');
  z-index: 2;
  padding-bottom: 150px;

  ${media.lessThan(BreakPoints.tablet)} {
    padding: 20px 40px;
    background-size: contain;
  }
  ${media.lessThan(BreakPoints.phone)} {
    background-size: 125%;
  }
`;

export const SimpleText = styled(Description)<IDescription>`
  ${media.lessThan(BreakPoints.tablet)} {
    margin-top: 0;
    ${fontSize({ fontSize: FontSizeTypes.xs })}
    span, p {
      ${fontSize({ fontSize: FontSizeTypes.s })}
      margin-top: -5px;
    }
  }
`;

export const InputContainer = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    margin-top: 10px;
    label {
      ${fontSize({ fontSize: FontSizeTypes.xxs })}
    }
    & ${StyledInput} {
      height: 40px;
      ${fontSize({ fontSize: FontSizeTypes.s })}
    }
  }
`;

export const FormContainer = styled(Column)<ILayout>`
  max-width: 500px;
  ${media.lessThan(BreakPoints.tablet)} {
    max-width: 300px;
  }
`;

export const SignUpText = styled.img`
  max-width: 302px;
  width: 100%;
  ${media.lessThan(BreakPoints.tablet)} {
    ${fontSize({ fontSize: FontSizeTypes.m })}
    width: 50%;
  }
`;

export const FormTitle = styled(Description)<IDescription>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${fontSize({ fontSize: FontSizeTypes.m })}
  }
`;

export const FormResult = styled(Description)<IDescription>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${fontSize({ fontSize: FontSizeTypes.m })}
  }
`;

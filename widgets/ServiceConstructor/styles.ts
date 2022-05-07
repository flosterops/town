import styled from 'styled-components';
import { Column, ILayout } from 'ui';
import { fontSize, textAlign, weight } from '../../theme/functions.theme';
import { AlignTextTypes, FontSizeTypes, WeightTypes } from '../../models/layout.model';
import { colors } from '../../theme/colors.theme';

interface IServiceConstructorWrapper extends ILayout {
  image: string;
}

export const ServiceConstructorWrapper = styled(Column)<IServiceConstructorWrapper>`
  background-image: url('${(props: IServiceConstructorWrapper): string => props.image}');
  background-size: 100%;
  background-repeat: repeat-y;
`;

export const TextElementsWrapper = styled(Column)<ILayout>`
  max-width: 1520px;
  padding: 0 40px;

  h2 {
    display: block;
    width: 100%;
    ${weight({ weight: WeightTypes.w800 })}
    ${fontSize({ fontSize: FontSizeTypes.l })}
    ${textAlign({ textAlign: AlignTextTypes.center })}
    color: ${colors.primary};
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    margin: 30px 0 15px;
  }

  p {
    ${weight({ weight: WeightTypes.w500 })}
    ${fontSize({ fontSize: FontSizeTypes.m })}
    color: ${colors.black};
    line-height: 1;
  }
  
  a {
    color: #602F04;
    text-decoration: underline;
    overflow-wrap: anywhere;
  }
`;

export const TitleImage = styled.img`
  max-width: 600px;
`;

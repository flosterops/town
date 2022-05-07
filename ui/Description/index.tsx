import React, { PropsWithChildren, ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { PositionTypes, FontSizeTypes, WeightTypes, ISpaceTypes, AlignTextTypes } from 'models/layout.model';
import { space, weight, fontSize, align, textAlign, lh } from 'theme/functions.theme';
import { globalStyles } from 'theme/global.theme';
import { colors } from 'theme/colors.theme';
import { doHyeonFontFamily } from '../../theme/fonts.theme';

const StyledDescription = styled.p<IDescription>`
  ${(props: IDescription): FlattenSimpleInterpolation | string =>
    props.doHyeonFont ? doHyeonFontFamily() : globalStyles.fonts.default}
  ${space};
  ${weight};
  ${fontSize};
  ${align};
  ${textAlign};
  ${lh};
  display: flex;
  width: auto;
  color: ${({ color }: IDescription): string => color as string};
  text-transform: ${(props: IDescription): string => (props.uppercase ? 'uppercase' : 'none')};
`;

export interface IDescription extends ISpaceTypes {
  position?: PositionTypes;
  color?: string;
  fontSize?: FontSizeTypes;
  uppercase?: boolean;
  textAlign?: AlignTextTypes;
  weight?: WeightTypes;
  children: ReactNode | ReactNodeArray;
  onClick?: (...args: any) => any;
  as?: string;
  doHyeonFont?: boolean;
}

const Description: React.FC<IDescription> = ({
  children,
  color = colors.textPrimary,
  fontSize = FontSizeTypes.s,
  weight = WeightTypes.w500,
  position = PositionTypes.default,
  textAlign = AlignTextTypes.default,
  doHyeonFont = false,
  as = 'p',
  ...props
}: PropsWithChildren<IDescription>): ReactElement => (
  <StyledDescription
    doHyeonFont={doHyeonFont}
    color={color}
    fontSize={fontSize}
    position={position}
    textAlign={textAlign}
    weight={weight}
    {...props}
  >
    {children}
  </StyledDescription>
);

export { Description };

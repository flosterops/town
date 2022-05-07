import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { PositionTypes, FontSizeTypes, WeightTypes, ISpaceTypes } from 'models/layout.model';
import { space, weight, fontSize, align } from 'theme/functions.theme';
import { colors } from 'theme/colors.theme';
import { globalStyles } from 'theme/global.theme';
import { doHyeonFontFamily } from '../../theme/fonts.theme';

export enum TitleTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  default = 'h2',
}

export interface ITitle extends ISpaceTypes {
  position?: PositionTypes;
  color?: string;
  fontSize?: FontSizeTypes;
  uppercase?: boolean;
  weight?: WeightTypes;
  children: ReactNode | ReactNodeArray;
  tagName: TitleTags;
  doHyeonFont?: boolean;
}

const StyledTitle = styled.h3<ITitle>`
  ${space};
  ${weight};
  ${fontSize};
  ${align};
  ${(props: ITitle): FlattenSimpleInterpolation | string =>
    props.doHyeonFont ? doHyeonFontFamily() : globalStyles.fonts.default}
  display: flex;
  width: auto;
  color: ${({ color }: ITitle): string => color as string};
  text-transform: ${(props: ITitle): string => (props.uppercase ? 'uppercase' : 'none')};
`;

const Title: React.FC<ITitle> = ({
  children,
  color = colors.textPrimary,
  fontSize = FontSizeTypes.default,
  weight = WeightTypes.default,
  position,
  doHyeonFont = false,
  tagName = TitleTags.default,
  ...props
}: ITitle): ReactElement => (
  <StyledTitle color={color} fontSize={fontSize} weight={weight} position={position} as={tagName} {...props}>
    {children}
  </StyledTitle>
);

export { Title };

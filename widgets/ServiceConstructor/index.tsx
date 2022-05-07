import React, { ReactElement } from 'react';
import { Description, Row, Title, TitleTags } from 'ui';
import { EServiceTypes, IServiceElement } from 'models/service.model';
// @ts-ignore
import bg from 'public/assets/images/signup_bg.jpeg';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { getServiceConfig } from './helper';
import { ServiceConstructorWrapper, TextElementsWrapper, TitleImage } from './styles';

interface IServiceConstructor {
  type: EServiceTypes;
  image: string;
}

const ServiceConstructor = ({ type, image }: IServiceConstructor): ReactElement => {
  const config = getServiceConfig(type);
  const components = {
    Description: Description,
    Title:       Title,
  };
  const tagNames = {
    Description: 'p',
    Title:       TitleTags.h2,
  };
  return (
    <ServiceConstructorWrapper
      padding='40px 0'
      image={bg.src}
      ai={AlignItemsTypes.center}
      jc={JustifyContentTypes.center}
    >
      <TextElementsWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Row jc={JustifyContentTypes.center}>
          <Row componentWidth='auto'>
            <TitleImage src={image} alt='terms' />
          </Row>
        </Row>
        {config.elements.map((element: IServiceElement): ReactElement => {
          const Component = components[element.type];
          return (
            <Component mtop='15px' key={element.id} tagName={tagNames[element.type] as TitleTags}>
              <span dangerouslySetInnerHTML={{ __html: element.text }} />
            </Component>
          );
        })}
      </TextElementsWrapper>
    </ServiceConstructorWrapper>
  );
};

export { ServiceConstructor };

import styled from 'styled-components';

interface IStyledSignUp {
  image: string;
  hoverImage: string;
  width: string;
}

export const StyledSignUp = styled.a<IStyledSignUp>`
  width: ${(props: IStyledSignUp): string => props.width};
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('${(props: IStyledSignUp): string => props.image}');
  &:hover {
    background-image: url('${(props: IStyledSignUp): string => props.hoverImage}');
  }
`;

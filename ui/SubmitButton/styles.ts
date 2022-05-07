import styled from 'styled-components';

interface IStyledSignUp {
  image: string;
  hoverImage: string;
  width: string;
}

export const StyledSubmit = styled.button<IStyledSignUp>`
  width: ${(props: IStyledSignUp): string => props.width};
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('${(props: IStyledSignUp): string => props.image}');
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-image: url('${(props: IStyledSignUp): string => props.hoverImage}');
  }
`;

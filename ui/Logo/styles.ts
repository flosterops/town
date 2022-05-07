import styled from 'styled-components';

interface IStyledLogo {
  pointer: boolean;
}

export const StyledLogo = styled.img<IStyledLogo>`
  cursor: ${(props: IStyledLogo): string => (props.pointer ? 'pointer' : 'auto')};
`;

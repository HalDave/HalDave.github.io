
import styled from '@emotion/styled';
interface AppImageProps {
  isDarkTheme: boolean,
  src: string;
  alt: string;
  title: string;
}

const Image = ({src, alt, title, isDarkTheme}: AppImageProps) => {
  return (
    <StyledImage alt={alt} src={src} title={title} isDarkTheme={isDarkTheme} />
  );
}

const StyledImage = styled.img<{ isDarkTheme: boolean }>`
  height: 1.75rem;
  width: 1.75rem;
  ${(props) =>
    !props.isDarkTheme &&
    `
    background-color: #102d5c; 
  `}
`;

export default Image
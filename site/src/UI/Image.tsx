
import styled from '@emotion/styled';
interface AppImageProps {
  src: string;
  alt: string;
  title: string;
}

const Image = ({src, alt, title}:AppImageProps) => {
  return (
    <StyledImage alt={alt} src={src} title={title}
    />
  );
}

const StyledImage = styled.img`
height: 1.75rem;
width: 1.75rem;
`

export default Image
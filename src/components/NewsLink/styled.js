import styled from 'styled-components';

const StyledNewsLink = styled.div`
width: 100%;
height: 170px;
display: flex;
gap: 20px;
padding: 15px 0;
&:hover {
  cursor: pointer;
  border: 1px solid rgba(219, 219, 219, 1);
}
& > img {
  object-fit: cover;
}
`

export default StyledNewsLink;

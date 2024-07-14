import styled from 'styled-components';

export const StyledArticle = styled.article`
display: flex;
border: 1px solid rgba(219, 219, 219, 1);
flex-direction: column;
width: 48vw;
padding: 24px;
gap: 20px;

@media (max-width: 768px) {
  width: 100vw;
}
`

export const StyledLink = styled.a`
color: rgba(241, 121, 0, 1);
`

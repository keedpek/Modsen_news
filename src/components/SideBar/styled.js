import styled from 'styled-components';

export const StyledSideBar = styled.div`
border: 1px solid rgba(219, 219, 219, 1);
display: flex;
flex-direction: column;
width: 34vw;
padding: 24px;

@media (max-width: 768px) {
  position: absolute;
  top: 9.5vh;
  right: 0;
  background-color: white;
  display: ${props => props.isOpened ? 'flex' : 'none'};
  width: 100%;
  z-index: 1000;
}
`

export const StyledNewsContainer = styled.div`
& > div:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
`


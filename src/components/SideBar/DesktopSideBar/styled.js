import styled from 'styled-components';

export const StyledSideBar = styled.div`
border: 1px solid rgba(219, 219, 219, 1);
display: flex;
flex-direction: column;
width: 34vw;
padding: 24px;
`

export const StyledNewsContainer = styled.div`
& > div:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
`

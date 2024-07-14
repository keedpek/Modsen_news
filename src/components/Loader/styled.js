import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

const StyledLoader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
border: 4px solid #999cff;
border-top: 4px solid white;
border-radius: 50%;
animation: ${spin} 1s linear infinite;
`

export default StyledLoader


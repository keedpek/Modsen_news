import styled from 'styled-components';

export const StyledHamburger = styled.button`
position: absolute;
top: 20px;
right: 50px;
width: 35px;
height: 25px;
border: none;
background: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (min-width: 768px) {
  display: none;
}
`

export const StyledLine = styled.span`
  width: 35px;
  border: 2px solid white;
  border-radius: 10px;
  display: block;
` 

import styled from 'styled-components';

const StyledButton = styled.button`
background: transparent;
border: 1px solid ${props => props.color || 'black'};
color: ${props => props.color || 'black'};
cursor: pointer;
padding: ${props => props.padding || '0'};
width: ${props => props.width || '100%'};
font-size: 16px;
font-weight: 600;
align-self: ${props => props.align || 'flex-start'};

@media (max-width: 1100px) {
  font-size: ${props => props.mSize || '16px'};
}

@media (max-width: 900px) {
  font-size: ${props => props.sSize || '16px'};
}
`

export default StyledButton;

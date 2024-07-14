import styled from 'styled-components';

const StyledText = styled.p`
font-family: ${props => props.font || 'Lexend Deca, sans-serif'};
color: ${props => props.color || 'rgba(57, 57, 57, 1)'};
font-weight: ${props => props.weight || '100'};
text-align: ${props => props.align || 'left'};
font-size: ${props => props.size || '16px'};

@media (max-width: 1100px) {
  font-size: ${props => props.mSize || '16px'};
}

@media (max-width: 900px) {
  font-size: ${props => props.sSize || '16px'};
}
`

export default StyledText;

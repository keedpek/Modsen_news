import styled from 'styled-components';

const StyledText = styled.p`
font-family: ${props => props.font || 'Lexend Deca, sans-serif'};
font-size: ${props => props.size || '16px'};
color: ${props => props.color || 'rgba(57, 57, 57, 1)'};
font-weight: ${props => props.weight || '100'};
text-align: ${props => props.align || 'left'};
`

export default StyledText;

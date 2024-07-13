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
`

export default StyledButton;

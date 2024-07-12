import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'flex-start'};
justify-content: ${props => props.justify || 'flex-start'};
gap: ${props => props.gap || '0'};
margin: ${props => props.margin || '0'};
padding: ${props => props.padding || '0'};
width: ${props => props.width || '100%'};
`

export default StyledFlex;

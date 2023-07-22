import styled from "styled-components"

export const ContentParagraph = styled.p`
margin-bottom: ${props => props.theme.space[6]};

font-size: ${props => props.theme.size.S};
font-weight: ${props => props.theme.weight.normal};
line-height: 2;
`
import styled from "styled-components"

export const CommonContainer = styled.div`
padding-top: 115px;
padding-bottom: 80px;

text-align: center;
`

export const Title = styled.h2`
margin-bottom: 40px;

font-size: ${props => props.theme.size.XXM};
font-weight: ${props => props.theme.weight.bold};
line-height: 1.05;
letter-spacing: -0.36px;
`
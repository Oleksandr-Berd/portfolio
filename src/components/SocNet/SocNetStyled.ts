import styled from "styled-components"

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const SocNetItem = styled.li`
&:not(:last-child){
    margin-right: 15px;
}
`
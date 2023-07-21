import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



body{
margin: 0;


}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
  font-family: ${props => props.theme.fontFamily.heading};
}

span, p, a, address{
  margin: 0;
}

ul, nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;

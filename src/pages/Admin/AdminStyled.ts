import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[15]};
  padding-bottom: ${(props) => props.theme.space[17]};

  text-align: center;
`;

export const Title = styled.h2`
margin-bottom: ${props => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.M};
`;

export const FieldStyled = styled.fieldset`
  padding-left: ${(props) => props.theme.space[4]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[5]};

  text-align: left;

  font-size: ${(props) => props.theme.size.N};
  font-style: italic;
  font-family: ${props => props.theme.fontFamily.heading};
`;

export const InputStyled = styled.input`
  width: ${(props) => props.theme.percentage[10]};

  padding-left: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};

  background-color: rgba(151, 151, 151, 0.3);
  font-size: ${(props) => props.theme.size.S};
  font-family: ${(props) => props.theme.fontFamily.body};

  border: none;
`;

export const SubmitButton = styled.button`

  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: ${(props) => props.theme.space[9]};
  padding-right: ${(props) => props.theme.space[9]};

  text-transform: uppercase;
  font-size: ${(props) => props.theme.size.XS};
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.dark};
  letter-spacing: 2px;
`;

export const ErrorStyled = styled.p`
  margin-bottom: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.errors};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.S};
`;

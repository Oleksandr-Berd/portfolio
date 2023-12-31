import styled from "styled-components"

export const FormStyled = styled.form`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: 80px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: ${(props) => props.theme.space[11]};
    padding-bottom: 109px;
  }
`;

export const InputStyled = styled.input`
  margin-bottom: ${(props) => props.theme.space[2]};

  width: calc(100% - 16px);

  padding-left: ${(props) => props.theme.space[4]};
  padding-top: 9px;
  padding-right: 0;
  padding-bottom: 9px;

  font-size: 13px;
  background-color: rgba(151, 151, 151, 0.3);

  border: none;

  &::placeholder {
    font-size: 13px;
    color: ${(props) => props.theme.color.mainText};
  }
`;

export const LabelStyled = styled.label`
  margin-bottom: ${(props) => props.theme.space[2]};

  font-size: ${(props) => props.theme.size.S};
  line-height: 2.31;
  font-weight: ${(props) => props.theme.weight.normal};
  color: ${(props) => props.theme.color.mainText};
`;

export const ErrorStyled = styled.p`
  color: ${(props) => props.theme.color.errors};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 13px;
`;

export const TextAreaStyled = styled.textarea`
  width: calc(100% - 16px);

  padding-left: ${(props) => props.theme.space[4]};
  padding-top: 9px;
  padding-right: 0;
  padding-bottom: 9px;

  font-size: 13px;
  background-color: rgba(151, 151, 151, 0.3);

  border: none;

  &::placeholder {
    color: ${(props) => props.theme.color.mainText};
  }
`;

export const SubmitButton = styled.button`
  margin-top: ${(props) => props.theme.space[2]};

  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: ${(props) => props.theme.space[9]};
  padding-right: ${(props) => props.theme.space[9]};

  text-transform: uppercase;
  font-size: ${(props) => props.theme.size.XS};
  color: ${(props) => props.theme.color.page};
  background-color: ${(props) => props.theme.color.mainText};
  letter-spacing: 2px;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.color.page};
    color: ${(props) => props.theme.color.hover};
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
`;

//desktop

export const DesktopContainer = styled.div`
width: ${props => props.theme.percentage[6]};

`
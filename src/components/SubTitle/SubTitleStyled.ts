import styled from "styled-components"

export const SubTitleStyled = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1.05;
  font-weight: ${(props) => props.theme.weight.bold};
  letter-spacing: -0.36px;

  @media (min-width: 1440px) {
    width: ${(props) => props.theme.percentage[5]};
  }
`;
import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;

  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  font-size: ${(props) => props.theme.size.XXM};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.05;
  letter-spacing: -0.36px;

  @media (min-width: 768px) {
width: 350px;

    margin-bottom: 0px;

    text-align: left;
  }
`;

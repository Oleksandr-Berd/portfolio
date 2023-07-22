import styled from "styled-components";

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: 51px;

  border-bottom: 1px solid ${(props) => props.theme.color.border};
  border-top: 1px solid ${(props) => props.theme.color.border};
`;

export const AvatarPic = styled.img`
  width: ${(props) => props.theme.percentage[10]};

  margin-bottom: ${(props) => props.theme.space[8]};
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[7]};

  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1.05;
  font-weight: ${(props) => props.theme.weight.bold};
  letter-spacing: -0.36px;
`;

export const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  line-height: 1.88;

  & > * {
    margin-bottom: ${(props) => props.theme.space[6]};
  }
`;



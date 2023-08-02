import styled from "styled-components"


export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[8]};

  border-top: 1px solid ${(props) => props.theme.color.border};
  border-bottom: 1px solid ${(props) => props.theme.color.border};

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: ${(props) => props.theme.space[11]};
    padding-bottom: ${(props) => props.theme.space[11]};
  }
`;

export const DesktopContainer = styled.div`
  @media (min-width: 1440px) {
    width: ${(props) => props.theme.percentage[6]};
  }
`;
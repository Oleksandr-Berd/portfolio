import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const CommonContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: 51px;

  border-bottom: 1px solid ${(props) => props.theme.color.border};
  border-top: 1px solid ${(props) => props.theme.color.border};

  @media (min-width: 768px) {
    padding-top: 51px;
    padding-bottom: 36px;
    margin-left: ${(props) => props.theme.space[12]};
  }
`;

export const AvatarPic = styled.img`
  width: ${(props) => props.theme.percentage[10]};

  margin-bottom: ${(props) => props.theme.space[8]};

  @media (min-width: 768px) {
    width: 300px;
    height: 429px;
    margin-bottom: 0;
  }
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

//accordion

export const AccordionStyled = styled(Accordion)`
  position: relative;

  &&& button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.color.mainText};
  }

  &&& button::after {
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateX(20px);

    width: ${(props) => props.theme.percentage[10]};

    content: "Read more...";

    font-style: italic;
    font-weight: ${(props) => props.theme.weight.bold};
    background: none;
    color: ${(props) => props.theme.color.mainText};
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  &&& {

    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.color.mainText};
  }


`;

export const TextAccordion = styled(Accordion.Body)`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
  color: ${(props) => props.theme.color.mainText};
`;

export const AccordionHeader = styled(Accordion.Header)`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  color: white;
  line-height: 2;

  &&& {
    background-color: transparent;
    border: none;
    color: white;
  }

  &&& > button {
    padding-left: 0;
  }
`;

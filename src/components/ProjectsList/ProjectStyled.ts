import { Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  $position?: string;
}

export const ImageContainer = styled.div<IProps>`
  padding-bottom: ${(props) => props.theme.space[8]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};

  @media (min-width: 768px) {
    width: 339px;
    height: 314px;

    margin-right: ${(props) => (props.$position === "even" ? "69px" : "0px")};
    margin-left: ${(props) => (props.$position !== "even" ? "69px" : "0px")};

    border: none;
  }

  @media (min-width: 1440px) {
    width: 540px;
    height: 460px;
  }
`;

export const Image = styled.img`
  width: ${(props) => props.theme.percentage[10]};
  height: ${(props) => props.theme.percentage[10]};
`;

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};

  @media (min-width: 768px) {
    width: 281px;

    padding-top: ${(props) => props.theme.space[8]};
    padding-bottom: 50px;

    border-top: 1px solid ${(props) => props.theme.color.border};
  }

  @media (min-width: 1440px) {
    width: 360px;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.XXM};
  letter-spacing: -0.36px;
  line-height: 1.05;

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.SL};
  }
`;

export const LinkButton = styled(NavLink)`
  display: inline-block;

  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[9]};
  padding-top: 17px;
  padding-bottom: 17px;

  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.color.mainText};

  border: 1px solid ${(props) => props.theme.color.mainText};

  &:focus{
    outline: none;
  }

  @media (min-width: 1440px) {
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    &:hover
     {
      background-color: ${(props) => props.theme.color.mainText};
      color: ${(props) => props.theme.color.hover};

      text-decoration: none;

      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }
`;

export const ItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[13]};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1440px){
margin-top: ${props => props.theme.space[9]};

    justify-content: space-between;
  }
`;

//Accordion

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

export const Text = styled(Accordion.Body)`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
  color: ${(props) => props.theme.color.mainText};

  /* @media (min-width: 768px) {
    &&& {
      top: -50%;
      z-index: 5;

      width: 90vw;
      height: 100 vh;

      background-color: ${(props) => props.theme.color.page};
    }
  } */
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

  @media (min-width: 768px) {
    &&& > button {
      padding-left: 0;
    }
  }
`;

//tablet

export const NotMobileHeader = styled.div`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
`;
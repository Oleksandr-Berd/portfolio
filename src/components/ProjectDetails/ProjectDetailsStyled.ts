import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
    $level: String;
}

export const ItemStyled = styled.div`
  margin-top: ${(props) => props.theme.space[2]};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[13]};
  }
`;

export const ImageContainer = styled.div`
  padding-bottom: ${(props) => props.theme.space[8]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const Image = styled.img`
  width: ${(props) => props.theme.percentage[10]};
`;

export const DifficultyContainer = styled.div`
  margin-top: ${(props) => props.theme.space[6]};
  margin-bottom: ${(props) => props.theme.space[6]};

  text-align: right;
`;

export const Difficulty = styled.p<IProps>`
  display: inline-block;

  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  color: ${(props) => props.theme.color.secondaryBody};

  background-color: ${(props) =>
    props.$level === "Junior"
      ? "#00FF7F"
      : props.$level === "Intermediate"
      ? "#FFD700"
      : props.$level === "Advanced"
      ? "#FFA500"
      : "#D2691E"};

  font-weight: ${(props) => props.theme.weight.bold};
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 1px;

  border: 2px solid
    ${(props) =>
      props.$level === "Junior"
        ? "#00FF7F"
        : props.$level === "Intermediate"
        ? "#FFD700"
        : props.$level === "Advanced"
        ? "#FFA500"
        : "#D2691E"};

  border-radius: ${(props) => props.theme.radius[1]};
`;

export const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};

  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.XXM};
  letter-spacing: -0.36px;
  line-height: 1.05;
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.size.N};
  line-height: 2;
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
`;

export const TechStackList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 2.31;
  color: ${(props) => props.theme.color.cyan};
`;

export const TechStackItem = styled.li`
  &:not(:last-child)::after {
    content: "/";
    margin-left: ${(props) => props.theme.space[1]};
  }
`;

export const BackgroundContainer = styled.div`
  padding-top: ${(props) => props.theme.space[11]};
`;

export const SubTitle = styled.h4`
  margin-bottom: ${(props) => props.theme.space[7]};

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.31;
  letter-spacing: -0.29px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  border-bottom: 1px solid ${(props) => props.theme.color.border};
  border-top: 1px solid ${(props) => props.theme.color.border};
`;

export const FlexButtonsContainer = styled.div`
  width: ${(props) => props.theme.percentage[6]};

  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.color.border};
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

export const ButtonLeft = styled.button<Partial<IProps>>`
padding-left: 0;
  text-align: left;

  background-color: transparent;
  border: none;
`;

export const ButtonRight = styled.button<Partial<IProps>>`
  text-align: right;

  background-color: transparent;
  border: none;

  &:active, &:focus{
    border: none;
  }
`;

export const ButtonTitle = styled.h4`
  margin-top: ${(props) => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.XXN};
  line-height: 1.13;
  letter-spacing: -0.29px;
  font-weight: ${(props) => props.theme.weight.normal};
`;

export const ButtonText = styled.p`
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.86;
  opacity: 0.4;
`;


//Preview

export const PreviewsList = styled.ul`
  padding-top: ${(props) => props.theme.space[3]};

  margin-bottom: 64px;
`;

export const PreviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[8]};
  }
`;

export const PreviewImage = styled.img`
width: ${props => props.theme.percentage[10]};


`
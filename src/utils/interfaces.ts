import { ChangeEvent } from "react";

export interface IContentProp {
    content: string;
}

export interface IPropsInput {
  typeInput: string;
  placeholder: string;
  name: string;
  label: string;
    errorMessage: string | undefined;
    handleChange: (evt:ChangeEvent<HTMLInputElement>)=>void
}

export interface IBurgerMenuProps {
  handleMenu: () => void;
  isOpen?: boolean;
}

export type Data = { email: String; password: String };

export type Project = {
  techStack: String[];
  title: string;
  task: string;
  liveUrl: string;
  coverImage?: object | null;
  summary: string;
  preview?: String[];
  difficulty: String;
};
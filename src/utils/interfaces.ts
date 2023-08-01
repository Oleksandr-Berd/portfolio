import { ChangeEvent, ReactNode } from "react";

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
  handleMenu?: () => void;
  isOpen?: boolean;
}

 export interface INavBarProps {
   id: number;
   title: string;
   path: string;
   position: "header" | "footer";
 }

export type Data = { email: String; password: String };

export type Project = {
  _id?: string,
  techStack: String[];
  title: string;
  task: string;
  liveUrl: string;
  coverImage?: string;
  summary: string;
  preview?: string[];
  difficulty: String;
  children?: ReactNode;
};

export interface IFetchProjects {
  difficulty: string;
  tech: string;
  currentPage: number;
  limit?:number
}
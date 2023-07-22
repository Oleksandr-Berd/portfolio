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

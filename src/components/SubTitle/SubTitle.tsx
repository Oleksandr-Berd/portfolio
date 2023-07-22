import { IContentProp } from "../../utils/interfaces";
import * as SC from "./SubTitleStyled"



const SubTitle: React.FC<IContentProp> = ({ content }): JSX.Element => {
    return (<SC.SubTitleStyled>{content}</SC.SubTitleStyled>);
}

export default SubTitle;
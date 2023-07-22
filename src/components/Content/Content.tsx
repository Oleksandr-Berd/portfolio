import * as SC from "./ContentStyled"

import { IContentProp } from "../../utils/interfaces";

const ContentParagraph: React.FC<IContentProp> = ({ content }): JSX.Element => {
    return (<SC.ContentParagraph>{content}</SC.ContentParagraph>);
}

export default ContentParagraph;
import * as SC from "./LinkButtonStyled"

interface IProps {
    path: string,
    text: string,
}

const LinkButton:React.FC<IProps> = ({ path, text }):JSX.Element => {
    return (<SC.ButtonLink to={path}>{text}</SC.ButtonLink>
        );
}
 
export default LinkButton;
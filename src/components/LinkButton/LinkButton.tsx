import * as SC from "./LinkButtonStyled"

interface IProps {
    path: string,
    text: string,
    margin?:string
}

const LinkButton:React.FC<IProps> = ({ path, text,margin }):JSX.Element => {
    return (<SC.ButtonLink to={path} style={{marginTop:margin}}>{text}</SC.ButtonLink>
        );
}
 
export default LinkButton;
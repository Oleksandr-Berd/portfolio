import * as SC from "./ProjectDetailsStyled"

interface IProps {
    previews: string[] | undefined,
}

const Preview: React.FC<IProps> = ({ previews }): JSX.Element => {



    return (<SC.PreviewsList>
        {previews && previews.map(el => <SC.PreviewItem key={el}><SC.PreviewImage src={el} alt="static preview"/></SC.PreviewItem>)}
    </SC.PreviewsList> );
}
 
export default Preview;
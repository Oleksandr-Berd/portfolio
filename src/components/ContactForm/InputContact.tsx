import * as SC from "./ContactFormStyled"

import { IPropsInput } from "../../utils/interfaces";

const InputContact: React.FC<IPropsInput> = ({ name, typeInput, placeholder, label, errorMessage, handleChange }): JSX.Element => {
    return (<div>
        <SC.LabelStyled htmlFor={name}>{label}</SC.LabelStyled>
        <SC.InputStyled type={typeInput} name={name} placeholder={placeholder} onChange={handleChange} />
        {errorMessage ? <SC.ErrorStyled>{errorMessage}</SC.ErrorStyled> : <SC.ErrorStyled style={{color:"transparent"}}>empty error</SC.ErrorStyled>}
    </div>);
}

export default InputContact;
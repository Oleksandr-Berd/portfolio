import { useFormik } from "formik";
import * as Yup from "yup"

import * as SC from "./AdminStyled"
import { ChangeEvent } from "react";
import { Data } from "../../utils/interfaces";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 chars length").required("Password is required")
})


interface IProps {
    submit:(props:Data)=>void
}


const AdminLogin: React.FC<IProps> = ({submit}): JSX.Element => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        }, validationSchema: validationSchema,
        onSubmit: (values) => console.log(values)
    }
    )

    const { email, password } = formik.values
    
    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)
    }

    const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
evt.preventDefault()

        submit({email, password})

}

    
    return (<SC.CommonContainer>
        <SC.Title>Login to Get the Admin's Permissions</SC.Title>
        <form onSubmit={handleSubmit}>
            <SC.FieldStyled>
                <legend>Email</legend>
                <SC.InputStyled type="text" name="email" onChange={handleChange} placeholder="type your email"/>
            </SC.FieldStyled>
            {formik.errors.email ? <SC.ErrorStyled>{formik.errors.email}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
            <SC.FieldStyled>
                <legend>Password</legend>
                <SC.InputStyled type="text" name="password" onChange={handleChange} placeholder="enter your password"/>
            </SC.FieldStyled>
            {formik.errors.password ? <SC.ErrorStyled>{formik.errors.password}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
            <SC.SubmitButton type="submit">Login</SC.SubmitButton>
        </form>
    </SC.CommonContainer>);
}

export default AdminLogin;
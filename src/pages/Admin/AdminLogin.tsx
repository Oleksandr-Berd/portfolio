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
        <h2>Login to Get the Admin's Permissions</h2>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Email</legend>
                <input type="text" name="email" onChange={handleChange}/>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="text" name="password" onChange={handleChange} />
            </fieldset>
            <button type="submit">Login</button>
        </form>
    </SC.CommonContainer>);
}

export default AdminLogin;
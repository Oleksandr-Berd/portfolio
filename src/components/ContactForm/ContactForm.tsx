import { ChangeEvent } from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as SC from "./ContactFormStyled"

import SubTitle from "../SubTitle/SubTitle";
import InputContact from "./InputContact";

const validationSchema = Yup.object().shape({
    contactName: Yup.string().min(2, "A name can't be so short").required("Name is required"),
    contactEmail: Yup.string().email().required("Email is required"),
    message: Yup.string().min(10, "Message should be more than 10 symbols").required("Message is required")
})

const ContactForm = () => {

    const titleContent = "Contact Me"

    const formik = useFormik({
        initialValues: {
            contactName: "",
            contactEmail: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    })

    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        formik.handleChange(evt)
    }

    const handleSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
        evt.preventDefault()

        console.log(formik.values);
        toast.success('Your message is sent and will be considered ASAP! ', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
            <ToastContainer />
            <SC.FormStyled onSubmit={handleSubmit}>
                <SubTitle content={titleContent} />
                <InputContact typeInput="text" placeholder="Please type your name" label="Name" errorMessage={formik.errors.contactName} name="contactName" handleChange={handleChange} />
                <InputContact typeInput="text" placeholder="Please type your email" label="Email Address" errorMessage={formik.errors.contactEmail} name="contactEmail" handleChange={handleChange} />
                <div>
                    <SC.LabelStyled htmlFor="message">Message</SC.LabelStyled>
                    <SC.TextAreaStyled placeholder="How can I help?" onChange={handleChange} name="message" rows={6} />
                    {formik.errors.message ? <SC.ErrorStyled>{formik.errors.message}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>empty error</SC.ErrorStyled>}
                </div>
                <SC.SubmitButton type='submit'>send message</SC.SubmitButton>
            </SC.FormStyled>
        </>);
       
}

export default ContactForm;
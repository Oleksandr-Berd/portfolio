import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { logout } from "../../redux/auth/operations";
import { ChangeEvent, FormEvent } from "react";
import { Project } from "../../utils/interfaces";
import { useAuth } from "../../hooks";

interface IProps {
    submit: (data: Project) => void
}


const AddProject: React.FC<IProps> = ({ submit }): JSX.Element => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useAuth()

    
const token = user.token
    const handleChange = (evt: ChangeEvent<HTMLInputElement> | any): void => {

        formik.handleChange(evt)
    }

    const logoutAdmin = (): void => {
        dispatch(logout())
        navigate("/")
    }



    const formik = useFormik({
        initialValues: {
            techStack: [],
            title: "",
            task: "",
            liveUrl: "",
            coverImage: "",
            summary: "",
            preview: [],
            difficulty: "",
        }, onSubmit: (values) => console.log(values)

    })

    const { techStack, title, task, liveUrl, coverImage, summary, preview, difficulty } = formik.values

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        submit({ techStack, title, task, liveUrl, summary, difficulty })
    }

    return (<div>
        <div>
            <button onClick={logoutAdmin}>Leave Admin mode</button>
        </div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Title</legend>
                <input type="text" name="title" onChange={handleChange} />
            </fieldset>
            <fieldset>
                <legend>Task</legend>
                <textarea name="task" onChange={handleChange}></textarea>
            </fieldset>
            <fieldset>
                <legend>Live Page</legend>
                <input type="text" name="liveUrl" onChange={handleChange} />
            </fieldset>
            <fieldset>
                <legend>Summary</legend>
                <textarea name="summary" onChange={handleChange}></textarea>
            </fieldset>
            <fieldset>
                <legend>Difficulties</legend>
                <Radio.Group onChange={handleChange} defaultValue="a" name="difficulty">
                    <Radio.Button value="Junior" >Junior</Radio.Button>
                    <Radio.Button value="Intermediate" >Intermediate</Radio.Button>
                    <Radio.Button value="Advanced" >Advanced</Radio.Button>
                    <Radio.Button value="Guru" >Guru</Radio.Button>
                </Radio.Group>
            </fieldset>
            <fieldset onChange={handleChange} name="techStack">
                <legend>Tech Stack</legend>
                <label>
                    <input type="checkbox" name="techStack" value="React" />
                    React
                </label>
                <label >
                    <input type="checkbox" name="techStack" value="MongoDB" />
                    MongoDB
                </label>
                <label><input type="checkbox" name="techStack" value="NodeJs" />
                    NodeJs
                </label>
                <label><input type="checkbox" name="techStack" value="TypeScript" />
                    TypeScript
                </label>
                <label>
                    <input type="checkbox" name="techStack" value="styled-components" />
                    styled-components</label>
                <label>
                    <input type="checkbox" name="techStack" value="Express" />
                    Express</label>
            </fieldset>
            <fieldset>
                <legend>Cover Picture</legend>
                <input type="file" />
            </fieldset>
            <fieldset>
                <legend>Preview</legend>
                <input type="file" />
            </fieldset>
            <button type="submit">Add New Project</button>
        </form>
    </div>);
}

export default AddProject;
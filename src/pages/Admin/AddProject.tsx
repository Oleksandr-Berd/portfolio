import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { logout } from "../../redux/auth/operations";
import { ChangeEvent } from "react";
import { Project } from "../../utils/interfaces";

interface IProps {
    submit: (data: Project) => void
}


const AddProject: React.FC<IProps> = ({ submit }): JSX.Element => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


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

    console.log(techStack, title, task, liveUrl, coverImage, summary, preview, difficulty);


    return (<div>
        <div>
            <button onClick={logoutAdmin}>Leave Admin mode</button>
        </div>
        <form>
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
                <input type="text" name="livePage" onChange={handleChange} />
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
                    <input type="checkbox" name="techStack"  value="React" />
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
        </form>
    </div>);
}

export default AddProject;
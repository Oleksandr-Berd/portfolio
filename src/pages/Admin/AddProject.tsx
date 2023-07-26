import { Radio, RadioChangeEvent } from "antd";
import TechStackCheck from "./TechStack";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/operations";

const AddProject: React.FC = (): JSX.Element => {

const dispatch =useDispatch()
const navigate = useNavigate()
    const onChange = (evt: RadioChangeEvent): void => {
        console.log(`radio checked:${evt.target.value}`);
    };

    const logoutAdmin = ():void => {
        dispatch(logout())
        navigate("/")
}

    return (<div>
        <div>
            <button onClick={logoutAdmin}>Leave Admin mode</button>
        </div>
        <form>
            <fieldset>
                <legend>Title</legend>
                <input type="text" name="title" />
            </fieldset>
            <fieldset>
                <legend>Task</legend>
                <textarea name="task"></textarea>
            </fieldset>
            <fieldset>
                <legend>Live Page</legend>
                <input type="text" name="livePage" />
            </fieldset>
            <fieldset>
                <legend>Summary</legend>
                <textarea name="summary"></textarea>
            </fieldset>
            <fieldset>
                <legend>Difficulties</legend>
                <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a" name="junior">Junior</Radio.Button>
                    <Radio.Button value="b" name="intermediate">Intermediate</Radio.Button>
                    <Radio.Button value="c" name="advanced">Advanced</Radio.Button>
                    <Radio.Button value="d" name="guru">Guru</Radio.Button>
                </Radio.Group>
            </fieldset>
            <fieldset>
                <legend>Tech Stack</legend>
                <TechStackCheck />
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